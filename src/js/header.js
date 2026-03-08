document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.close');
    const navLinks = document.querySelectorAll('.nav__link'); // Находим ссылки

    const openMenu = () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Слушатели событий
    if (burgerBtn) burgerBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    
    // Закрытие по клику на оверлей
    if (menu) {
        menu.addEventListener('click', (e) => {
            if (e.target === menu) closeMenu();
        });
    }

    // Закрытие по клику на ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});