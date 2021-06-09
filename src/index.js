
document.addEventListener('DOMContentLoaded', function () {
  imgs()
  dogPix()
  dogBreeds()
})
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedList = document.getElementById('dog-breeds')
let dogs = document.getElementById('dog-image-container')
let h2 = document.createElement('h2')
let breedArray = []

function dogPix(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => {
      data.message.forEach(image => imgs(image))
  })
}

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
    let brdArr = Object.keys(data.message)
    breedLi(brdArr)
  })
}

let filterOptions = document.querySelector('#breed-dropdown')
filterOptions.addEventListener('change', function(event){
  let filPk = event.target.value
  console.log('selected', filPk, filterOptions)
  breedFilter(filPk)
})

function breedFilter(filPk) {
  console.log (filPk)
      fetch(breedUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log(filPk)
        let brdArr = Object.keys(data.message).filter(k => k[0] === filPk)
        console.log(brdArr)
        breedLi(brdArr)
      })
}

function breedLi(brdArr){
  breedList.innerHTML = ""
  brdArr.forEach(list => {
    breedList.innerHTML += `
      <li id='li-brd'>
        ${list}
      </li>
    `
  const allBreeds = document.querySelectorAll('#li-brd')
  for(const brd of allBreeds){
    brd.addEventListener('click', breedColorChange)
  }
  })
}

function breedColorChange(){
  const clk = event.target
  clk.style.color = "#ff0000"
}
