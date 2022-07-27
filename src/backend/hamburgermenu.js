const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.nav-bar')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
    body.classList.toggle('active')
})

document.querySelectorAll('.link, .nav_sign-up, .nav_sign-in').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    navMenu.classList.remove('active')
    body.classList.remove('active')
}))