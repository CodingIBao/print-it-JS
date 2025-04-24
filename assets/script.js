/**
 * Array of slide objects used in the banner carousel.
 * Each slide contains an image filename and an HTML tagLine.
 *
 * @type {Array<{image: string, tagLine: string}>}
 */
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



/**
 * References to DOM elements used in the slideshow.
 */
const imgBanner = document.querySelector(".banner-img");
const textBanner = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

/**
 * Current index of the displayed slide.
 * @type {number}
 */
let index = 0;

/**
 * Displays the slide at a given index.
 * The index is wrapped using modulo to ensure an infinite loop.
 *
 * @param {number} i - The index of the slide to display (can be out of bounds).
 */
function showSlides(i) {
  index = (i + slides.length) % slides.length;
  imgBanner.src = `./assets/images/slideshow/${slides[index].image}`;
  textBanner.innerHTML = slides[index].tagLine;
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach(dot => dot.classList.remove("dot_selected"));
  allDots[index].classList.add("dot_selected");
}

/**
 * Automatically switches to the next slide every 3 seconds.
 */
setInterval(() => showSlides(index + 1), 3000);

/**
 * Event listeners for manual navigation arrows.
 * Left arrow shows the previous slide.
 * Right arrow shows the next slide.
 */
arrowLeft.addEventListener("click", () => showSlides(index - 1));
arrowRight.addEventListener("click", () => showSlides(index + 1));

/**
 * Generates navigation dots for each slide.
 * Each dot is appended to the .dots container and corresponds to a slide index.
 * The first dot is marked as active with the 'dot_selected' class.
 */
slides.forEach((slides, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("dot_selected");
  dot.setAttribute("data-index", i);
  dotsContainer.appendChild(dot);
});

/**
 * Adds click event listeners to each navigation dot.
 * Clicking a dot displays the corresponding slide.
 */
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlides(i);
  });
});