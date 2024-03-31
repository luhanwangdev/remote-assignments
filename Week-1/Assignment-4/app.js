let nav = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
        nav.style.boxShadow = "";
    } else {
        nav.style.boxShadow = "0 6px 4px -6px rgb(142, 146, 92)";
    }
});
