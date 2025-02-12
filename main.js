document.addEventListener("DOMContentLoaded", function () {
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
  hideLinks()
  isClicked = false;

  firstShareBtn.addEventListener('click', displayLinks);
  secondShareBtn.addEventListener('click', hideLinks);
  firstShareBtn.removeEventListener("click", toggleLinks);
}

function onMediumScreen() {
  console.log("Now at 1024px or more");
  hideLinks();
  isClicked = false;

  firstShareBtn.removeEventListener("click", displayLinks);
  secondShareBtn.removeEventListener("click", hideLinks);
  firstShareBtn.removeEventListener("click", toggleLinks);

  firstShareBtn.addEventListener("click", toggleLinks);

  inactiveElement.style.display = 'grid';
  
}

function onScreenSize() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    onSmallScreen();
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    onMediumScreen();
  }
}

onScreenSize();
window.addEventListener("resize", onScreenSize);
});
