//carousel for mobile
const carouselTrack = document.querySelector(".carousel-track");
const slides = Array.from(carouselTrack.children);
const mobilePrevBtn = document.querySelector(".btn1");
const mobileNextBtn = document.querySelector(".btn2");

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
   slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
   track.style.transform = "translateX(-" + targetSlide.style.left + ")";
   currentSlide.classList.remove("current-slide");
   targetSlide.classList.add("current-slide");
};

//when left arrow is clicked, move left
mobilePrevBtn.addEventListener("click", () => {
   const currentSlide = carouselTrack.querySelector(".current-slide");
   const prevSlide = currentSlide.previousElementSibling;

   moveToSlide(carouselTrack, currentSlide, prevSlide);
});

//when right arrow is clicked, move right
mobileNextBtn.addEventListener("click", () => {
   const currentSlide = carouselTrack.querySelector(".current-slide");
   const nextSlide = currentSlide.nextElementSibling;

   moveToSlide(carouselTrack, currentSlide, nextSlide);
});
