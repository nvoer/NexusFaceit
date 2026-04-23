document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const menuItems = document.querySelectorAll('.menu-item');
    const tabContents = document.querySelectorAll('.tab-content');

    // Функция переключения меню
    const toggleSidebar = () => {
        sidebar.classList.toggle('mobile-active');
        burgerBtn.classList.toggle('open'); // Для анимации иконки
    };

    // Открытие/Закрытие
    burgerBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);

    // Логика переключения вкладок
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и контента
            menuItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            item.classList.add('active');

            // Показываем нужный контент по data-tab
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // Закрываем меню на мобилках после выбора пункта
            if (window.innerWidth <= 1024) {
                toggleSidebar();
            }
        });
    });

    // Закрытие меню при клике вне его области (на мобилках)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && 
            !sidebar.contains(e.target) && 
            !burgerBtn.contains(e.target) && 
            sidebar.classList.contains('mobile-active')) {
            toggleSidebar();
        }
    });
});