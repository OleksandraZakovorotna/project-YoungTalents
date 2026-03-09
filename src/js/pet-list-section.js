import { openPetModal } from './animal-details-modal.js';

const API_BASE = 'https://paw-hut.b.goit.study/api';
const petsList = document.getElementById('pets-list');
const filterList = document.getElementById('filter-list');
const loadMoreBtn = document.getElementById('load-more');
const loader = document.getElementById('loader');

let currentPage = 1;
let currentCategoryId = '';
const animalsCache = {};

const getLimit = () => (window.innerWidth >= 1440 ? 9 : 8);

const toggleLoader = show => {
  loader.classList.toggle('is-hidden', !show);
};

async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE}/categories`);
    const categories = await response.json();

    let markup = `<li><button type="button" class="filter-btn active" data-id="">Всі</button></li>`;

    markup += categories
      .map(
        cat =>
          `<li><button type="button" class="filter-btn" data-id="${cat._id}">${cat.name}</button></li>`
      )
      .join('');

    filterList.innerHTML = markup;
  } catch (error) {
    console.error('Помилка завантаження категорій:', error);
  } finally {
    toggleLoader(false);
  }
}

// 2. Animals

async function fetchAnimals(page = 1, categoryId = '') {

  toggleLoader(true);

  const limit = getLimit();
  

  let url = `${API_BASE}/animals?page=${page}&limit=${limit}`;

  if (categoryId && categoryId !== '') {
    url += `&categoryId=${categoryId}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const animals = data.animals || [];
    const totalItems = data.totalItems || 0;

    renderCards(animals, page === 1);
    cacheAnimals(animals);

    const currentDisplayed = petsList.children.length;
    if (currentDisplayed >= totalItems || animals.length === 0) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  } catch (error) {
    console.error('Помилка завантаження тварин:', error);
  } finally {
      toggleLoader(false);
  }
}

// 3. Pet card

function renderCards(animals, isNewSearch) {
  const markup = animals
    .map(
      pet => `
    <li class="pet-card" data-pet-id="${pet._id}">
      <div class="pet-img-thumb">
        <img  src="${pet.image}" alt="${pet.name}" class="pet-img" loading="lazy">
      </div>
      <div class="pet-content">
        <p class="pet-species">${pet.species}</p>
        <h3 class="pet-name">${pet.name}</h3>
        <ul class="pet-tags">
          ${pet.categories ? pet.categories.map(c => `<li>${c.name}</li>`).join('\n') : ''}
        </ul>
        
      <div class="pet-meta">
          <span>${pet.age}</span>  <span>${pet.gender}</span>
          </div>
        </div>
          <div class="pet-descr">
        <p class="pet-short-desc">${pet.shortDescription}</p>
        </div>
        <button
          type="button"
          class="learn-more-btn"
        >
          Дізнатись більше
        </button>
    </li>
  `
    )
    .join('');

  if (isNewSearch) {
    petsList.innerHTML = markup;
  } else {
    petsList.insertAdjacentHTML('beforeend', markup);
  }
}

export function cacheAnimals(animals) {
  animals.forEach(pet => {
    animalsCache[pet._id] = pet;
  });
}

// 4. Event

filterList.addEventListener('click', async e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document
    .querySelectorAll('.filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCategoryId = btn.dataset.id;
  currentPage = 1;
  await fetchAnimals(currentPage, currentCategoryId);
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await fetchAnimals(currentPage, currentCategoryId);
});

document.addEventListener('DOMContentLoaded', () => {
  fetchCategories();
  fetchAnimals(1, '');

  document.addEventListener('click', e => {
    const btn = e.target.closest('.learn-more-btn');
    if (!btn) return;
  
    const petCard = btn.closest('.pet-card');
    const petId = petCard.dataset.petId;
    const pet = animalsCache[petId]; 
  
    if (pet) {
      openPetModal(pet); 
    }
  });
});
