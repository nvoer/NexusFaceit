const burgerBtn = document.getElementById('burgerBtn');
const sidebar = document.getElementById('sidebar');
const menuItems = document.querySelectorAll('.menu-item');
const tabContents = document.querySelectorAll('.tab-content');

// 1. Открытие/закрытие по клику на бургер
burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Останавливаем всплытие, чтобы клик не считался кликом "вне" панели
    sidebar.classList.toggle('mobile-active');
});

// 2. Закрытие при клике на любой пункт меню
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');

        // Переключение активного класса в меню
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Переключение контента
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });

        // Закрываем сайдбар после выбора (для мобилок)
        sidebar.classList.remove('mobile-active');
    });
});

// 3. ЗАКРЫТИЕ ПРИ КЛИКЕ ВНЕ ПАНЕЛИ
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnBurger = burgerBtn.contains(event.target);

    // Если клик был не по сайдбару и не по бургеру, и меню открыто — закрываем
    if (!isClickInsideSidebar && !isClickOnBurger && sidebar.classList.contains('mobile-active')) {
        sidebar.classList.remove('mobile-active');
    }
});