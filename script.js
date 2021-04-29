const inputGreen = document.querySelector('[green]')
const inputRed = document.querySelector('[red]')
const inputBlue = document.querySelector('[blue]')
const shoeImg = document.querySelector('[shoe-img]')
const likeButton = document.querySelector('.like-btn')

function changeShoeImg(input, imgSrc){
  if(input.checked){
    shoeImg.src = imgSrc
  }
}

inputGreen.addEventListener('click', e => {
  changeShoeImg(inputGreen, 'images/tenis1.png')
})

inputRed.addEventListener('click', e => {
  changeShoeImg(inputRed, 'images/tenis2.png')
})

inputBlue.addEventListener('click', e => {
  changeShoeImg(inputBlue, 'images/tenis3.png')
})

likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('active')})