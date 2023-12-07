// VIDEO JS START
let vid = document.getElementById("myVideo");
let playButton = document.getElementById("playVideo");
function playVid() {
  vid.play();
  vid.controls = true; // Show controls when video starts playing
  playButton.classList.add("d-none");
}
vid.addEventListener("play", function () {
  vid.controls = true; // Show controls when video starts playing
  playButton.classList.add("d-none");
});
vid.addEventListener("pause", function () {
  vid.controls = false; // Hide controls when video is paused
  playButton.classList.remove("d-none");
});

// VIDEO JS END

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
});

// Get all the nav tabs and add click event listeners
const navTabs = document.querySelectorAll(".nav-links");
navTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
    // Additional code for handling tab clicks can be added here if needed
  });
});

// ************ Back to Top ************
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//SECURE DATA BUTTON JS

function startSimulation() {
  var elementClasses = [
    ".first-text-secure",
    ".second-text-secure",
    ".third-text-secure",
    ".fourth-text-secure",
    ".fifth-text-secure",
    ".six-text-secure",
    ".seven-text-secure",
    ".eight-text-secure"
  ];

  elementClasses.forEach(function (elementClass, index) {
    var currentElement = document.querySelector(elementClass);

    if (currentElement) {
      currentElement.style.opacity = "0";

      setTimeout(function () {
        currentElement.style.opacity = "1";
      }, 1000 + 500 * index); // Adjust the delay based on the index
    }
  });
}
