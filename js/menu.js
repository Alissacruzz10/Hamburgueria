document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-x');
    });
});