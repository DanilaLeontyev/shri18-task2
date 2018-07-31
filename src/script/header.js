let navButton = document.querySelector('.hamburger-button')
let navMenu = document.querySelector('.nav-menu')

navButton.addEventListener('click', function () {
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden')
    } else navMenu.classList.add('hidden')
})