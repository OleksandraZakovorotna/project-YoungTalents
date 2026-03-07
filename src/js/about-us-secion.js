import Swiper from 'swiper';

import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    slided1: '../img/about-img/slide 01-desk.jpg',
    slided2: '../img/about-img/slide 01-desk@2x.jpg',
    slidet1: '../img/about-img/slide 01-tab.jpg',
    slidet2: '../img/about-img/slide 01-tab@2x.jpg',
    slidem1: '../img/about-img/slide 01-mob.jpg',
    slidem2: '../img/about-img/slide 01-mob@2x.jpg',
    texta:
      'Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили.',
  },
  {
    slided1: '../img/about-img/slide 02-desk.jpg',
    slided2: '../img/about-img/slide 02-desk@2x.jpg',
    slidet1: '../img/about-img/slide 02-tab.jpg',
    slidet2: '../img/about-img/slide 02-tab@2x.jpg',
    slidem1: '../img/about-img/slide 02-mob.jpg',
    slidem2: '../img/about-img/slide 02-mob@2x.jpg',
    texta:
      'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.',
  },
  {
    slided1: '../img/about-img/slide 03-desk.jpg',
    slided2: '../img/about-img/slide 03-desk@2x.jpg',
    slidet1: '../img/about-img/slide 03-tab.jpg',
    slidet2: '../img/about-img/slide 03-tab@2x.jpg',
    slidem1: '../img/about-img/slide 03-mob.jpg',
    slidem2: '../img/about-img/slide 03-mob@2x.jpg',
    texta:
      'Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.',
  },
  {
    slided1: '../img/about-img/slide 04-desk.jpg',
    slided2: '../img/about-img/slide 04-desk@2x.jpg',
    slidet1: '../img/about-img/slide 04-tab.jpg',
    slidet2: '../img/about-img/slide 04-tab@2x.jpg',
    slidem1: '../img/about-img/slide 04-mob.jpg',
    slidem2: '../img/about-img/slide 04-mob@2x.jpg',
    texta:
      'Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках.',
  },
  {
    slided1: '../img/about-img/slide 05-desk.jpg',
    slided2: '../img/about-img/slide 05-desk@2x.jpg',
    slidet1: '../img/about-img/slide 05-tab.jpg',
    slidet2: '../img/about-img/slide 05-tab@2x.jpg',
    slidem1: '../img/about-img/slide 05-mob.jpg',
    slidem2: '../img/about-img/slide 05-mob@2x.jpg',
    texta:
      'Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин.',
  },
];

const slidu = document.querySelector('.swiper-wrapper');

function getAdaptiveImage(imgObj) {
  const isRetina = window.devicePixelRatio > 1;
  const width = window.innerWidth;

  if (width < 768) {
    return isRetina ? imgObj.slidem2 : imgObj.slidem1; // Mobile
  } else if (width >= 768 && width < 1440) {
    return isRetina ? imgObj.slidet2 : imgObj.slidet1; // Tablet
  } else {
    return isRetina ? imgObj.slided2 : imgObj.slided1; // Desktop
  }
}

function createSlides(array) {
  return array
    .map(image => {
      const selectedImg = getAdaptiveImage(image);
      return `
      <div class="swiper-slide" style="background-image: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.63)), url('${selectedImg}')">
        <div class="slide-content">
          <p>
            ${image.texta}
          </p>
        </div>
      </div>
  `;
    })
    .join('');
}

slidu.insertAdjacentHTML('beforeend', createSlides(images));

let swiperInstance;
function renderSlider() {
  const slidu = document.querySelector('.swiper-wrapper');
  if (!slidu) return;

  slidu.innerHTML = createSlides(images);

  if (swiperInstance && typeof swiperInstance.destroy === 'function') {
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new Swiper('.about-swiper', {
    modules: [Navigation, Pagination, Keyboard],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.about-swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    renderSlider();
  }, 250);
});

renderSlider();
