const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger-button')
if (ipad.matches) {

  console.log(menu)
  burger.addEventListener('click', () => {
    menu.classList.toggle('is-active')
  })
}
ipad.addListener((event) => {
  if (event.matches) {
    burger.addEventListener('click', () => {
      menu.classList.toggle('is-active')
    })
  }else{
    burger.removeEventListener('click', () => {
      menu.classList.toggle('is-active')
    })
  }
})
