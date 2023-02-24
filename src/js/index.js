const botaoDeTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const botaoX = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src;

function alternarModal() {modal.classList.toggle('aberto')}

botaoDeTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

botaoX.addEventListener('click', () => {
    alternarModal()
    video.setAttribute("src", "")
})