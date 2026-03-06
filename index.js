import{S as a,N as l,P as d}from"./assets/vendor-Dn2PEXfL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const c="/icons.svg",u="https://paw-hut.b.goit.study/api/feedbacks?limit=6&page=1";function f(i){const s=i.rate;let r="";for(let n=1;n<=5;n++)n<=s?r+=`
        <svg class="star-icon filled">
          <use href="${c}#icon-star-full"></use>
        </svg>`:n-.5<=s?r+=`
        <svg class="star-icon">
          <use href="${c}#icon-star-half"></use>
        </svg>`:r+=`
        <svg class="star-icon outline">
          <use href="${c}#icon-star-empty"></use>
        </svg>`;return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating-container">
          <div class="stars-wrapper">${r}</div>
        </div>

        <p class="feedback-text">${i.description}</p>
        <p class="feedback-author">${i.author}</p>
      </div>
    </div>
  `}function p(i){const s=document.getElementById("feedbacks-wrapper");!s||!(i!=null&&i.length)||(s.innerHTML=i.map(f).join(""),g())}function g(){const i=document.querySelector(".feedbacks-section .feedbacks-slider");if(!i)return;const s=i.querySelector(".swiper-button-next"),r=i.querySelector(".swiper-button-prev"),n=new a(i,{modules:[l,d],slidesPerView:1,slidesPerGroup:1,spaceBetween:32,grabCursor:!0,pagination:{el:i.querySelector(".swiper-pagination"),clickable:!0},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1280:{slidesPerView:2,slidesPerGroup:1}},on:{init:function(){t(this)},slideChange:function(){t(this)}}});function t(e){!s||!r||(r.disabled=e.isBeginning,r.classList.toggle("swiper-button-disabled",e.isBeginning),s.disabled=e.isEnd,s.classList.toggle("swiper-button-disabled",e.isEnd))}return s&&s.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),n.slideNext()}),r&&r.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),n.slidePrev()}),n}async function b(){if(document.querySelector(".feedbacks-section"))try{const n=(await(await fetch(u)).json()).feedbacks;p(n)}catch{const r=document.getElementById("feedbacks-error");r&&r.classList.remove("is-hidden")}}b();
//# sourceMappingURL=index.js.map
