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


// CAROUSEL
// Implements infinite carousel behavior by cycling through slides every few seconds
// Loops back to the first slide after reaching the end
const imgBanner = document.querySelector(".banner-img");
imgBanner.src = `./assets/images/slideshow/${slides[0].image}`;

const textBanner = document.querySelector("#banner p");
textBanner.innerHTML = slides[0].tagLine;

let index = 0;

function changeSlides() {
  imgBanner.src = `./assets/images/slideshow/${slides[index].image}`;
  textBanner.innerHTML = slides[index].tagLine;

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(changeSlides, 3000);


// ARROWS
// Manual navigation: updates slide content when left or right arrow is clicked
// Loops to the end or beginning of the slideshow if limits are reached
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function updateSlides() { 
	imgBanner.src = `./assets/images/slideshow/${slides[index].image}`;
	textBanner.innerHTML = slides[index].tagLine;
}

arrowLeft.addEventListener("click", () => {
	index--;

	if (index < 0) {
		index = slides.length -1;
	}

	updateSlides();
})

arrowRight.addEventListener("click", () => {
	index++;

	if (index >= slides.length) {
		index = 0;
	}

	updateSlides();
})

// DOTS