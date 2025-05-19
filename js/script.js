// js/script.js
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const currentYearSpan = document.getElementById('currentYear');

    // Theme toggle elements
    const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]'); // Use a data attribute for all theme buttons
    const sunIcons = document.querySelectorAll('[data-sun-icon]');
    const moonIcons = document.querySelectorAll('[data-moon-icon]');

    // --- Mobile Menu ---
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            const openIconSvg = mobileMenuButton.querySelector('svg.block');
            const closeIconSvg = mobileMenuButton.querySelector('svg.hidden');
            if (openIconSvg && closeIconSvg) {
                openIconSvg.classList.toggle('hidden');
                openIconSvg.classList.toggle('block');
                closeIconSvg.classList.toggle('hidden');
                closeIconSvg.classList.toggle('block');
            }
        });
    }

    // --- Current Year ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Theme Toggle Logic ---
    const htmlElement = document.documentElement;

    const updateThemeIcons = (theme) => {
        sunIcons.forEach(icon => theme === 'dark' ? icon.classList.remove('hidden') : icon.classList.add('hidden'));
        moonIcons.forEach(icon => theme === 'dark' ? icon.classList.add('hidden') : icon.classList.remove('hidden'));
    };
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        updateThemeIcons(theme);
    };

    const toggleThemeAndStore = () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    if (themeToggleButtons.length > 0) {
        themeToggleButtons.forEach(button => {
            button.addEventListener('click', toggleThemeAndStore);
        });
    }

    // Apply saved theme on initial load or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default to light
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) { // Only if no user preference is set
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });

    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hasAttribute('data-theme-toggle') || this.closest('[data-theme-toggle]')) {
                return; 
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                   mobileMenu.classList.add('hidden');
                   mobileMenuButton.setAttribute('aria-expanded', 'false');
                    const openIconSvg = mobileMenuButton.querySelector('svg.block'); // Should be visible
                    const closeIconSvg = mobileMenuButton.querySelector('svg.hidden'); // Should be hidden
                    if(openIconSvg && closeIconSvg && openIconSvg.classList.contains('hidden')){ // If close is visible
                        openIconSvg.classList.remove('hidden');
                        openIconSvg.classList.add('block');
                        closeIconSvg.classList.remove('block');
                        closeIconSvg.classList.add('hidden');
                    }
                }
            }
        });
    });
});