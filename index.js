const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navLinks.classList.remove("active");
}))