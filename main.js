const firstShareBtn = document.querySelector('.item3')
const secondShareBtn = document.querySelector('.item6')
const inactiveElement = document.querySelector('.item')
const activeElement = document.querySelector('.hidden')

function displayLinks() {
  inactiveElement.style.display = 'none'
  activeElement.style.display = 'flex'
}
function hideLinks() {
  inactiveElement.style.display = 'grid'
  activeElement.style.display = 'none'
}

firstShareBtn.addEventListener('click', displayLinks)

secondShareBtn.addEventListener('click', hideLinks)