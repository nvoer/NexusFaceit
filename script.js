document.addEventListener('DOMContentLoaded', () => {
    // 1. Ищем элементы по тем ID, которые у тебя в HTML
    const burgerBtn = document.getElementById('burgerBtn'); 
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const tabs = document.querySelectorAll('.menu-item');
    const contents = document.querySelectorAll('.tab-content');

    // --- ОТЛАДКА (проверь в консоли F12) ---
    console.log('Бургер найден:', !!burgerBtn);
    console.log('Крестик найден:', !!closeBtn);
    console.log('Сайдбар найден:', !!sidebar);

    // --- ОТКРЫТИЕ МЕНЮ ---
    if (burgerBtn) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.add('open');
            console.log('Класс open добавлен сайдбару');
        });
    }

    // --- ЗАКРЫТИЕ МЕНЮ (КРЕСТИК) ---
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.remove('open');
            console.log('Класс open удален');
        });
    }

    // --- ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Сброс всех активных элементов
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Активация нужной вкладки
            tab.classList.add('active');
            const targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Закрываем меню после клика (для мобильного режима)
            sidebar.classList.remove('open');
        });
    });

    // --- ЗАКРЫТИЕ ПРИ КЛИКЕ МИМО ---
    document.addEventListener('click', (e) => {
        if (sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !burgerBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
});