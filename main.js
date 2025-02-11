const firstShareBtn = document.querySelector('.item3')
const secondShareBtn = document.querySelector('.item6')
const inactiveElement = document.querySelector('.item')
const activeElement = document.querySelector('.hidden')
let isClicked = false;


function displayLinks() {
  inactiveElement.style.display = 'none'
  activeElement.style.display = 'flex'
}
function hideLinks() {
  inactiveElement.style.display = 'grid'
  activeElement.style.display = 'none'
}
function bothLinks() {
  inactiveElement.style.display = 'grid'
  activeElement.style.display = 'flex'
}

// firstShareBtn.addEventListener('click', displayLinks)

// secondShareBtn.addEventListener('click', hideLinks)



function onSmallScreen() {
  console.log("Now at 1023px or smaller");
  firstShareBtn.addEventListener('click', displayLinks);
  secondShareBtn.addEventListener('click', hideLinks)
}

function onMediumScreen() {
  console.log("Now at 768px or more");
  firstShareBtn.addEventListener('click', bothLinks);
}


// Function to check screen size and run the correct function
function onScreenSize() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
      onSmallScreen();
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
      onMediumScreen();
  } 
  // else {
  //     onLargeScreen();
  // }
}

// Run check when the page loads
onScreenSize();

// Run check whenever the window is resized
window.addEventListener("resize", onScreenSize);
