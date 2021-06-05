

console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogs = document.getElementById('dog-image-container')
let h2 = document.createElement('h2')

function dogPix(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => {
      data.message.forEach(image => imgs(image))
      // ?=console.log(data.message)
  })
}
// dogPix()

function imgs(image){
    let dogs = document.getElementById('dog-image-container')
    let h2 = document.createElement('img')
    h2.src = image
    dogs.appendChild(h2)
}

function dogBreeds(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    // console.log(data.message)
    for(const breed in data.message){
      breedLi(breed)
      // console.log(`${breed}: ${data.message[breed]}`)
    }
  })
}
dogBreeds()

function breedLi(breed){
  let breedList = document.getElementById('dog-breeds')
  let brdLst = document.createElement('li')
  brdLst.innerHTML = breed
  console.log(breed)
  breedList.appendChild(brdLst)
}
document.addEventListener('DOMContentLoaded', function () {
  imgs()
  dogPix()
  dogBreeds()
  breedLi()
})
