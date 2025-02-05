const firstShareBtn = document.querySelector('.item3')
const secondShareBtn = document.querySelector('.item6')
const inactive = document.querySelector('.item')
const active = document.querySelector('.hidden')

function displayLinks() {
  inactive.style.display = 'none'
  active.style.display = 'flex'
}
function hideLinks() {
  inactive.style.display = 'grid'
  active.style.display = 'none'
}

firstShareBtn.addEventListener('click', displayLinks)

secondShareBtn.addEventListener('click', hideLinks)