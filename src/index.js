

console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogs = document.getElementById('dog-image-container')
let h2 = document.createElement('h2')
const breedList = document.getElementById('dog-breeds')
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
    // console.log(data.message)
    let brdArr = Object.keys(data.message)
    // console.log(brdArr)
    breedLi(brdArr)
  })
}

function breedLi(brdArr){
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
  if(clk){
    clk.style.color = "#ff0000"
  }
}

document.addEventListener('DOMContentLoaded', function () {
  imgs()
  dogPix()
  dogBreeds()
})


  let filOps = document.querySelector('#breed-dropdown')
  console.log(filOps)
let filterArr = Array.from(filOps)
console.log(filterArr)

for(const fil of filOps){
  console.log(fil)
  fil.addEventListener('change', function(){
    console.log('selected')
})
}


// function logMe(){
