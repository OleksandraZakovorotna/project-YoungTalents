import { showLoader, hideLoader } from './loader.js'; // твій модуль з лоадером

const heroBtn = document.querySelector("#hero-btn");

heroBtn.addEventListener("click", (e) => {
  e.preventDefault(); // відміняємо стандартну поведінку <a>

  // Показати лоадер
  showLoader();

  // Плавний скрол
  const section = document.querySelector("#success-story");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Приховати лоадер через 1 секунду (можна змінити)
  setTimeout(() => {
    hideLoader();
  }, 1000);
});

