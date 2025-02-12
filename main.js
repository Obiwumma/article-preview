const firstShareBtn = document.querySelector('.item3');
const secondShareBtn = document.querySelector('.item6');
const inactiveElement = document.querySelector('.item');
const activeElement = document.querySelector('.hidden');
let isClicked = false;

function displayLinks() {
  inactiveElement.style.display = 'none';
  activeElement.style.display = 'flex';
}

function hideLinks() {
  inactiveElement.style.display = 'grid';
  activeElement.style.display = 'none';
}

function bothLinks() {
  inactiveElement.style.display = 'grid';
  activeElement.style.display = 'flex';
}


function toggleLinks () {
  if (!isClicked) {
    bothLinks();
  } else {
    hideLinks();
  }
  isClicked = !isClicked;
};

function onSmallScreen() {
  console.log("Now at 1023px or smaller");
  firstShareBtn.addEventListener('click', displayLinks);
  secondShareBtn.addEventListener('click', hideLinks);
}

function onMediumScreen() {
  console.log("Now at 1024px or more");
 
  firstShareBtn.removeEventListener("click", toggleLinks);
  firstShareBtn.addEventListener("click", toggleLinks);
}

function onScreenSize() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    onSmallScreen();
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    onMediumScreen();
  }
}

onScreenSize();
window.addEventListener("resize", onScreenSize);
