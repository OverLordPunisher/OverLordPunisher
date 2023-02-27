window.addEventListener("scroll", function() {
    var nav = document.querySelector(".nav-container");
    nav.classList.toggle("nav-fixed", window.scrollY > 0);
})