let filterButton = document.querySelector('.bar--buttonFilter')
let filter = document.querySelector('.bar--filter')

filterButton.addEventListener('click', function () {
    if (filter.classList.contains('hidden')) {
        filter.classList.remove('hidden')
    } else filter.classList.add('hidden')
})