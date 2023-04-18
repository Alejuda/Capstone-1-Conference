const hamburguer = document.getElementById("nav-btn");
const navMenu = document.getElementById("mobile-menu");

const closeMenu = document.querySelectorAll(".close-mobile-menu");

const speakers = [
  {
    name: "Dr. CynthiaBreazeal",
    description: "MIT Media Lab",
    talkAbout: '\"Designing Social Robots: The Next Generation of Intelligent Machines\"',
    img: "./assets/img/breazeal.png"
},
  {
    name: "Dr. Fei-Fei Li",
    description: "Stanford University",
    talkAbout: '\"Deep Learning for Computer Vision: Challenges and Opportunities\"',
    img: "./assets/img/fei-fei.png"
  }
];

hamburguer.addEventListener("click", function (e) {
  navMenu.classList.add("show");
});

Array.from(closeMenu).forEach((button) => {
  button.addEventListener("click", function (e) {
    navMenu.classList.remove("show");
  });
});
