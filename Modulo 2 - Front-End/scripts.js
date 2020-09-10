const modalOVerlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        modalOVerlay.classList.add('active')
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOVerlay.classList.remove('active')
})