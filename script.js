document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.auto', {
        strings: ["Software Engineer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: fetch,
        cursorChar: '|',
        showCursor: false
    });
});





function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger.icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

