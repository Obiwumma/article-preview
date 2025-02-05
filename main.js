const firstShareBtn = document.querySelector('.item3')
const secondShareBtn = document.querySelector('.item6')
const inactive = document.querySelector('.item')
const active = document.querySelector('.hidden')

function displayChange() {
  inactive.style.display = 'none'
  active.style.display = 'flex'
}
firstShareBtn.addEventListener('click', displayChange)
// displayChange()
console.log(secondShareBtn)