console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded', function () {
  imgs();
  dogPix();
});
let dogs = document.getElementById('dog-image-container')
let h2 = document.createElement('h2')

function dogPix(){
  fetch(imgUrl)
  .then(response => (response.json()))
  .then(results => {
      results.message.forEach(image => imgs(image))
  })
}

function imgs(img){
    let dogs = document.getElementById('dog-image-container')
    let h2 = document.createElement('h2')
    h2.src = img
    dogs.appendChild(h2)
}
