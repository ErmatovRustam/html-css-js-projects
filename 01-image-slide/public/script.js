const panels = document.querySelectorAll('.panel')

panels.forEach((el) => {
  el.addEventListener('click', () => {
    removeActiveClasses()
    el.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((el) => {
    el.classList.remove('active')
  })
}
