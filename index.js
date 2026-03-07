import{S as j,N as $,P,K as O,A as K}from"./assets/vendor-DZ-agT1-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const B=[{slided1:"../img/about-img/slide 01-desk.jpg",slided2:"../img/about-img/slide 01-desk@2x.jpg",slidet1:"../img/about-img/slide 01-tab.jpg",slidet2:"../img/about-img/slide 01-tab@2x.jpg",slidem1:"../img/about-img/slide 01-mob.jpg",slidem2:"../img/about-img/slide 01-mob@2x.jpg",texta:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{slided1:"../img/about-img/slide 02-desk.jpg",slided2:"../img/about-img/slide 02-desk@2x.jpg",slidet1:"../img/about-img/slide 02-tab.jpg",slidet2:"../img/about-img/slide 02-tab@2x.jpg",slidem1:"../img/about-img/slide 02-mob.jpg",slidem2:"../img/about-img/slide 02-mob@2x.jpg",texta:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{slided1:"../img/about-img/slide 03-desk.jpg",slided2:"../img/about-img/slide 03-desk@2x.jpg",slidet1:"../img/about-img/slide 03-tab.jpg",slidet2:"../img/about-img/slide 03-tab@2x.jpg",slidem1:"../img/about-img/slide 03-mob.jpg",slidem2:"../img/about-img/slide 03-mob@2x.jpg",texta:'Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{slided1:"../img/about-img/slide 04-desk.jpg",slided2:"../img/about-img/slide 04-desk@2x.jpg",slidet1:"../img/about-img/slide 04-tab.jpg",slidet2:"../img/about-img/slide 04-tab@2x.jpg",slidem1:"../img/about-img/slide 04-mob.jpg",slidem2:"../img/about-img/slide 04-mob@2x.jpg",texta:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{slided1:"../img/about-img/slide 05-desk.jpg",slided2:"../img/about-img/slide 05-desk@2x.jpg",slidet1:"../img/about-img/slide 05-tab.jpg",slidet2:"../img/about-img/slide 05-tab@2x.jpg",slidem1:"../img/about-img/slide 05-mob.jpg",slidem2:"../img/about-img/slide 05-mob@2x.jpg",texta:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],R=document.querySelector(".swiper-wrapper");function _(e){const t=window.devicePixelRatio>1,s=window.innerWidth;return s<768?t?e.slidem2:e.slidem1:s>=768&&s<1440?t?e.slidet2:e.slidet1:t?e.slided2:e.slided1}function q(e){return e.map(t=>`
      <div class="swiper-slide" style="background-image: linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.63)), url('${_(t)}')">
        <div class="slide-content">
          <p>
            ${t.texta}
          </p>
        </div>
      </div>
  `).join("")}R.insertAdjacentHTML("beforeend",q(B));let m;function C(){const e=document.querySelector(".swiper-wrapper");e&&(e.innerHTML=q(B),m&&typeof m.destroy=="function"&&m.destroy(!0,!0),m=new j(".about-swiper",{modules:[$,P,O],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".about-swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0}}))}let x;window.addEventListener("resize",()=>{clearTimeout(x),x=setTimeout(()=>{C()},250)});C();const d=document.querySelector(".backdrop"),I=document.querySelector(".order-modal-close-btn"),b=document.querySelector(".order-modal-form");let M=null;function E(e){d&&(M=e,d.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",D),d.addEventListener("click",T),I.addEventListener("click",c),b.addEventListener("submit",A))}function c(){d&&(d.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",D),d.removeEventListener("click",T),I.removeEventListener("click",c),b.removeEventListener("submit",A),b.reset())}async function A(e){var n,r;e.preventDefault();const{name:t,phone:s,comment:i}=e.target.elements,o={name:t.value.trim(),phone:s.value.trim(),comment:i.value.trim(),animalId:M};try{const l=await axios.post("https://paw-hut.b.goit.study/api/orders",o);Swal.fire({icon:"success",title:"Успіх!",text:"Ваша заявка успішно відправлена.",confirmButtonColor:"#7bf556"}),c()}catch(l){const L=((r=(n=l.response)==null?void 0:n.data)==null?void 0:r.message)||"Щось пішло не так. Спробуйте пізніше.";Swal.fire({icon:"error",title:"Помилка",text:L,confirmButtonColor:"#f55656"})}}function D(e){e.key==="Escape"&&c()}function T(e){e.target===d&&c()}const a={backdrop:document.querySelector("[data-pet-modal-backdrop]"),closeBtn:document.querySelector("[data-pet-modal-close]"),adoptBtn:document.querySelector("[data-pet-modal-adopt]"),img:document.querySelector("[data-pet-modal-img]"),type:document.querySelector("[data-pet-modal-type]"),name:document.querySelector("[data-pet-modal-name]"),meta:document.querySelector("[data-pet-modal-meta]"),desc:document.querySelector("[data-pet-modal-desc]"),health:document.querySelector("[data-pet-modal-health]"),behavior:document.querySelector("[data-pet-modal-behavior]")};let w=null;function W(){document.body.classList.add("modal-open")}function U(){document.body.classList.remove("modal-open")}function H(e){e.key==="Escape"&&p()}function N(e){e.target===a.backdrop&&p()}function z(){p()}function V(){p(),typeof E=="function"&&E(w)}function J(e){const t=e.image||e.img||e.photo||e.avatar||"";a.img.src=t,a.img.alt=e.name?`Фото: ${e.name}`:"Фото тварини",a.type.textContent=e.type||e.species||"Тварина",a.name.textContent=e.name||"Без клички";const s=e.age??"—",i=e.sex??e.gender??"—";a.meta.textContent=`${s} • ${i}`,a.desc.textContent=e.description??e.desc??"Опис відсутній.",a.health.textContent=e.healthStatus??"Інформація відсутня.",a.behavior.textContent=e.behavior??"Інформація відсутня.",console.log(e)}function Q(e){a.backdrop&&(w=e,J(e),a.backdrop.classList.remove("is-hidden"),W(),window.addEventListener("keydown",H),a.backdrop.addEventListener("click",N),a.closeBtn.addEventListener("click",z),a.adoptBtn.addEventListener("click",V))}function p(){a.backdrop&&(a.backdrop.classList.add("is-hidden"),U(),window.removeEventListener("keydown",H),a.backdrop.removeEventListener("click",N),a.closeBtn.removeEventListener("click",z),a.adoptBtn.removeEventListener("click",V),w=null)}new K(".accordion-container");function X(){document.addEventListener("click",e=>{const t=e.target.closest(".learn-more-btn");if(!t)return;const s={name:t.dataset.name,species:t.dataset.species,image:t.dataset.img,description:t.dataset.desc,age:t.dataset.age,gender:t.dataset.sex};Q(s)})}const F="https://paw-hut.b.goit.study/api",v=document.getElementById("pets-list"),G=document.getElementById("filter-list"),y=document.getElementById("load-more"),S=document.getElementById("loader");let u=1,h="";const Y=()=>window.innerWidth>=1440?9:8,g=e=>{e?S.classList.remove("is-hidden"):S.classList.add("is-hidden")};async function Z(){g(!0);try{const t=await(await fetch(`${F}/categories`)).json();let s='<li><button type="button" class="filter-btn active" data-id="">Всі</button></li>';s+=t.map(i=>`<li><button type="button" class="filter-btn" data-id="${i._id}">${i.name}</button></li>`).join(""),G.innerHTML=s}catch(e){console.error("Помилка завантаження категорій:",e)}finally{g(!1)}}async function k(e=1,t=""){g(!0);const s=Y();let i=`${F}/animals?page=${e}&limit=${s}`;t&&t!==""&&(i+=`&categoryId=${t}`);try{const n=await(await fetch(i)).json(),r=n.animals||[],l=n.totalItems||0;ee(r,e===1),v.children.length>=l||r.length===0?y.style.display="none":y.style.display="block"}catch(o){console.error("Помилка завантаження тварин:",o)}finally{g(!1)}}function ee(e,t){const s=e.map(i=>`
    <li class="pet-card">
      <picture class="pet-img-thumb">
        <source srcset="${i.image}" media="(min-width: 320px)">
        <img src="${i.image}" alt="${i.name}" class="pet-img" loading="lazy">
      </picture>
      <div class="pet-content">
        <p class="pet-species">${i.species}</p>
        <h3 class="pet-name">${i.name}</h3>
        <ul class="pet-tags">
          ${i.categories?i.categories.map(o=>`<li>${o.name}</li>`).join(`
`):""}
        </ul>

      <div class="pet-meta">
          <span>${i.age}</span>  <span>${i.gender}</span>
          </div>
        </div>
          <div class="pet-descr">
        <p class="pet-short-desc">${i.shortDescription}</p>
        </div>
         <button
        type="button"
        class="learn-more-btn"
        data-name="${i.name}"
        data-species="${i.species}"
        data-img="${i.image}"
        data-desc="${i.shortDescription}"
        data-age="${i.age}"
        data-sex="${i.gender}"
        >Дізнатись більше
        </button>
    </li>
  `).join("");t?v.innerHTML=s:v.insertAdjacentHTML("beforeend",s)}G.addEventListener("click",async e=>{const t=e.target.closest(".filter-btn");t&&(document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),t.classList.add("active"),h=t.dataset.id,u=1,await k(u,h))});y.addEventListener("click",async()=>{u+=1,await k(u,h)});document.addEventListener("DOMContentLoaded",()=>{Z(),k(1,""),X()});const f="/icons.svg",te="https://paw-hut.b.goit.study/api/feedbacks?limit=6&page=1";function ie(e){const t=e.rate;let s="";for(let i=1;i<=5;i++)i<=t?s+=`
        <svg class="star-icon filled">
          <use href="${f}#icon-star-full"></use>
        </svg>`:i-.5<=t?s+=`
        <svg class="star-icon">
          <use href="${f}#icon-star-half"></use>
        </svg>`:s+=`
        <svg class="star-icon outline">
          <use href="${f}#icon-star-empty"></use>
        </svg>`;return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating-container">
          <div class="stars-wrapper">${s}</div>
        </div>

        <p class="feedback-text">${e.description}</p>
        <p class="feedback-author">${e.author}</p>
      </div>
    </div>
  `}function se(e){const t=document.getElementById("feedbacks-wrapper");!t||!(e!=null&&e.length)||(t.innerHTML=e.map(ie).join(""),ne())}function ne(){const e=document.querySelector(".feedbacks-section .feedbacks-slider");if(!e)return;const t=e.querySelector(".swiper-button-next"),s=e.querySelector(".swiper-button-prev"),i=new j(e,{modules:[$,P],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,grabCursor:!0,pagination:{el:e.querySelector(".swiper-pagination"),clickable:!0},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1280:{slidesPerView:2,slidesPerGroup:1}},on:{init:function(){o(this)},slideChange:function(){o(this)}}});function o(n){!t||!s||(s.disabled=n.isBeginning,s.classList.toggle("swiper-button-disabled",n.isBeginning),t.disabled=n.isEnd,t.classList.toggle("swiper-button-disabled",n.isEnd))}return t&&t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),i.slideNext()}),s&&s.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),i.slidePrev()}),i}async function oe(){if(document.querySelector(".feedbacks-section"))try{const i=(await(await fetch(te)).json()).feedbacks;se(i)}catch{const s=document.getElementById("feedbacks-error");s&&s.classList.remove("is-hidden")}}oe();
//# sourceMappingURL=index.js.map
