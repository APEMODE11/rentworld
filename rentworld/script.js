document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('navbar');
    const darkModeSwitch = document.getElementById('darkModeSwitch');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    darkModeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Plynulý scroll
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Plynulý scroll
                });
            }
        });
    });
});
