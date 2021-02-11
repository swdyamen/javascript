// this code create Slider using JS, you can change the image information to use any dynamic data.
//you can Email me for any more information "swd.yamen@gmail.com"
//Live Demo http://sunrise-it.se/javascript/slider/index.html

// Slider Item
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
//console.table(sliderImages);

// Slider Total Item
var sliderLCount = sliderImages.length;
//console.log(sliderLCount);

//Start slider from first image
var currentSlide = 1;

var slideNumberElement = document.getElementById("slider-number");

var paginationElement = document.createElement("ul");
paginationElement.setAttribute("class", "pagination");
paginationElement.setAttribute("id", "pagination");

//Create the previous button.
var previousItme = document.createElement("li");
previousItme.setAttribute("class", "page-item");
previousItme.setAttribute("id", "prev");

var paginationItmeUrl = document.createElement("a");
paginationItmeUrl.setAttribute("class", "page-link");
paginationItmeUrl.appendChild(document.createTextNode("Previous"));

previousItme.appendChild(paginationItmeUrl);

paginationElement.appendChild(previousItme);

//Create the pagination No.
for (var i = 1; i <= sliderLCount; i++) {
  var paginationItme = document.createElement("li");

  paginationItme.setAttribute("class", "page-item");
  paginationItme.setAttribute("data-index", i);
  paginationItme.onclick = slideCrNo;
  var paginationItmeUrl = document.createElement("a");
  paginationItmeUrl.setAttribute("class", "page-link");
  paginationItmeUrl.appendChild(document.createTextNode(i));

  paginationItme.appendChild(paginationItmeUrl);
  paginationElement.appendChild(paginationItme);
}

//Create the next button.
var nextItme = document.createElement("li");
nextItme.setAttribute("class", "page-item");
nextItme.setAttribute("id", "next");
var paginationItmeUrl = document.createElement("a");
paginationItmeUrl.setAttribute("class", "page-link");
paginationItmeUrl.appendChild(document.createTextNode("Next"));
nextItme.appendChild(paginationItmeUrl);

paginationElement.appendChild(nextItme);

document.getElementById("pagination").appendChild(paginationElement);

var nextButton = document.getElementById("next");
var prvButton = document.getElementById("prev");
prev.classList.add("disabled");

// Next Slid function
function nextSlide() {
  if (currentSlide <= sliderLCount - 1) {
    currentSlide++;
    console.log(currentSlide);
    theSlideNo();
    prev.classList.remove("disabled");
  } else {
    nextButton.classList.add("disabled");
  }
}

// Previous Slid function
function prvSlide() {
  console.log(currentSlide);
  if (currentSlide >= 2) {
    currentSlide--;
    console.log(currentSlide);
    theSlideNo();
    nextButton.classList.remove("disabled");
  } else {
    prev.classList.add("disabled");
  }
}

nextButton.onclick = nextSlide;
prvButton.onclick = prvSlide;

//Remove All Active image
function removeAllActive() {
  sliderImages.forEach(function(img) {
    img.classList.remove("active");
  });
}

//Choose the Active Image
function theSlideNo() {
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
}

//Get the slider No.
function slideCrNo() {
  removeAllActive();
  currentSlide = parseInt(this.getAttribute("data-index"));
  console.log(currentSlide);
  theSlideNo();

  if (currentSlide == 5) {
    nextButton.classList.add("disabled");
  } else if (currentSlide <= 5) {
    nextButton.classList.remove("disabled");
  }

  if (currentSlide == 1) {
    prev.classList.add("disabled");
  } else if (currentSlide >= 2) {
    prev.classList.remove("disabled");
  }
}
