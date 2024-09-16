const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// création des bullet points
let nbslides = slides.length;
console.log(slides.length);

let nodeDots = document.querySelector(".dots");
let nodeOneDot = ``;
slides.forEach((slide) => (nodeOneDot += `<div class="dot "></div>`));
nodeDots.innerHTML = nodeOneDot;

//gestion des bullet points et changements d'images au "click"
//grâce aux flèches gauche et droite
let currentIndex = 0;
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dot = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");

function updateSlide(index) {
  image.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

document.querySelector(".arrow_left").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

document.querySelector(".arrow_right").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

updateSlide(currentIndex);
