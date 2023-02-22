// initialization aos animation library
AOS.init();

let typingText = document.querySelector(".sec-text");

const textfun = () => {
  setTimeout(() => {
    typingText.innerHTML = "Front-End Developer";
  }, 0);
  setTimeout(() => {
    typingText.innerHTML = "Ui Designer";
  }, 4000);
};

setInterval(textfun, 8000);

// contact bord
let contactBord = document.getElementById("contact-bord");
let closeButton = document.getElementById("close");
let contactButton = document.getElementById("contact-button");

contactButton.onclick = () => {
  contactBord.style.zIndex = "1000";
  contactBord.style.top = "0px";
  contactBord.style.visibility = "visible";
};
closeButton.onclick = () => {
  contactBord.style.zIndex = "-1000";
  contactBord.style.top = "-2500px";
};
const closeContactBord = () => {
  contactBord.style.zIndex = "-1000";
  contactBord.style.top = "-2500px";
};

// document.onkeyup = function (e) {
//   if ((e.key = "Escape")) {
//     contactBord.style.zIndex = "-1000";
//     contactBord.style.top = "-2500px";
//   }
// };

// links bord
let burgerIcon = document.querySelector("#bars");
let ulLinks = document.querySelector("#UlLinks");
let linksInUlLinks = document.querySelectorAll(".ul-links li a");
let closeButtonUlLinks = document.querySelector("#close-links");

burgerIcon.onclick = function () {
  ulLinks.classList.remove("links");
  ulLinks.classList.add("open");
  setTimeout(() => {
    ulLinks.style.top = "0px";
  }, 200);
};

closeButtonUlLinks.onclick = function () {
  ulLinks.style.top = "-2500px";
  setTimeout(() => {
    ulLinks.classList.remove("open");
    ulLinks.classList.add("links");
  }, 200);
};

linksInUlLinks.forEach((e) => {
  e.onclick = function () {
    ulLinks.style.top = "-2500px";
    setTimeout(() => {
      ulLinks.classList.remove("open");
      ulLinks.classList.add("links");
    }, 200);
  };
});

document.onkeyup = function (e) {
  if ((e.key = "Escape")) {
    contactBord.style.zIndex = "-1000";
    contactBord.style.top = "-2500px";
    ulLinks.style.top = "-2500px";
    setTimeout(() => {
      ulLinks.classList.remove("open");
      ulLinks.classList.add("links");
    }, 200);
  }
};

// make header fixed position
let header = document.getElementById("head");
let scrollToTop = document.querySelector("#toTop");

window.onscroll = function () {
  if (this.scrollY >= 300) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.backgroundColor = "#ffffff05";
    header.style.backdropFilter = "blur(30px)";
    // scroll to top button
    scrollToTop.style.display = "flex";
    scrollToTop.style.visibility = "visible";
    scrollToTop.style.zIndex = "10000";
  } else {
    header.style.position = "absolute";
    header.style.top = "0";
    header.style.left = "0";
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "blur(2px)";
    // scroll to top button
    scrollToTop.style.display = "none";
    scrollToTop.style.visibility = "hidden";
    scrollToTop.style.zIndex = "-10000";
  }
};

// scroller bar
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrolltop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolltop / height) * 100}%`;
});

// skills section mouse effect
let layerParent = document.getElementById("mouse-effect");

layerParent.addEventListener("mousemove", skills);
function skills(e) {
  this.querySelectorAll(".layer").forEach((el) => {
    let speed = el.getAttribute("data-speed");
    let y = (window.innerWidth - e.pageX * speed) / 70;
    let x = (window.innerHeight - e.pageY * speed) / 70;
    el.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
// stop skills function
layerParent.onmouseleave = function () {
  this.querySelectorAll(".layer").forEach((el) => {
    el.style.transform = `translateX(0px) translateY(0px)`;
  });
};