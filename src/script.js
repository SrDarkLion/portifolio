const menuBurguer = document.querySelector(".menu-burguer");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu-link");
const body = document.body;

menuBurguer.addEventListener("click", () => {
  menuBurguer.classList.toggle("ativo");
  menu.classList.toggle("ativo");
  body.classList.toggle("scroll-block");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuBurguer.classList.remove("ativo");
    menu.classList.remove("ativo");
    body.classList.remove("scroll-block");
  });
});

const flipContainer = document.querySelector(".flip-container");
const flipCard = document.querySelector(".flip-card");

flipContainer.addEventListener("click", () => {
  flipCard.classList.toggle("virar");
});

const knight = document.querySelector(".botao-cv");
knight.addEventListener("click", () => {
  const audio = document.querySelector(".audio");
  audio.play();
});
