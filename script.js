document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-burguer');
    const menu = document.querySelector('.menu');
    const knight = document.querySelector('.knight');
    const audio = document.querySelector('.audio');

    // Menu toggle with accessibility
    menuButton.addEventListener('click', toggleMenu);
    
    // Handle keyboard navigation
    menuButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            closeMenu();
        }
    });

    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('menu-active');
        
        if (!isExpanded) {
            // Focus the first menu item when opening
            const firstMenuItem = menu.querySelector('a');
            if (firstMenuItem) setTimeout(() => firstMenuItem.focus(), 100);
        }
    }

    function closeMenu() {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('menu-active');
    }

    // Add keyboard navigation within menu
    menu.addEventListener('keydown', (e) => {
        const menuItems = [...menu.querySelectorAll('a')];
        const currentIndex = menuItems.indexOf(document.activeElement);

        switch(e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % menuItems.length;
                menuItems[nextIndex].focus();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
                menuItems[prevIndex].focus();
                break;
            case 'Escape':
                e.preventDefault();
                closeMenu();
                menuButton.focus();
                break;
        }
    });

    // Easter egg with accessibility
    knight.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play().catch(console.error);
    });
    
    knight.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            audio.currentTime = 0;
            audio.play().catch(console.error);
        }
    });

    // Make knight interactive
    knight.setAttribute('role', 'button');
    knight.setAttribute('tabindex', '0');
    knight.setAttribute('aria-label', 'Tocar som especial');
});