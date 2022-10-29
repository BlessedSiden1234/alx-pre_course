var text = "Welcome to \nthe \nsplit \nuniverse";

var chars = text.split('');
var container = document.getElementById("welcome");
let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let pos = 0;
const myBtn = document.getElementById("myBtn")
const more = document.getElementById("more")
const less = document.getElementById("less")
const myBtn1 = document.getElementById("myBtn-1")
const more1 = document.getElementById("more-1")
const less1 = document.getElementById("less-1")
const myBtn2 = document.getElementById("myBtn-2")
const more2 = document.getElementById("more-2")
const less2 = document.getElementById("less-2")
const myBtn3 = document.getElementById("myBtn-3")
const more3 = document.getElementById("more-3")
const less3 = document.getElementById("less-3")
const myBtn5 = document.getElementById("myBtn-5")
const more5 = document.getElementById("more-5")
const less5 = document.getElementById("less-5")
less.style.display = "none";
less1.style.display = "none";
less2.style.display = "none";
less3.style.display = "none"
less5.style.display = "none"

function readMore(){
  if(less.style.display === 'none'){
    console.log('Yep');
    more.style.display = "block";
    less.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore(){
  if(less.style.display === "block"){
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
  }
}

function readMore1(){
  if(less1.style.display === 'none'){
    more1.style.display = "block";
    less1.style.display = "block";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore1(){
  if(less1.style.display === "block"){
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    
  }
}

function readMore2(){
  if(less2.style.display === 'none'){
    more2.style.display = "block";
    less2.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore2(){
  if(more2.style.display === "block"){
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
  }
}

function readMore3(){
  if(less3.style.display === 'none'){
    more3.style.display = "block";
    less3.style.display = "block";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}

function hideMore3(){
  if(less3.style.display === "block"){
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
  }
}
function readMore5(){
  if(less5.style.display === 'none'){
    more5.style.display = "block";
    less5.style.display = "block";
    myBtn.style.display = "block";
    less.style.display = "none";
    more.style.display = "none";
    myBtn3.style.display = "block";
    less3.style.display = "none";
    more3.style.display = "none";
    myBtn1.style.display = "block";
    less1.style.display = "none";
    more1.style.display = "none";
    myBtn2.style.display = "block";
    less2.style.display = "none";
    more2.style.display = "none";
    myBtn6.style.display = "block";
    less6.style.display = "none";
    more6.style.display = "none";
  }
}
   
function hideMore5(){
  if(more5.style.display === "block"){
    myBtn5.style.display = "block";
    less5.style.display = "none";
    more5.style.display = "none";
  }
}


var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "";
    }
}, 80);


let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})








