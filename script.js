const eventOne = document.querySelector(".event-one")
const eventtwo = document.querySelector(".event-two")
const eventthre = document.querySelector(".event-three")
const eventfour = document.querySelector(".event-four")
const eventfive = document.querySelector(".event-five")
const lightOne = document.querySelector(".one")
const lightTwo = document.querySelector(".two")
const lightThree = document.querySelector(".three")
const lightFour = document.querySelector(".four")
const lightFive = document.querySelector(".five")
const clickOne = document.querySelector(".first")
const clickTwo = document.querySelector(".second")
const clickThree = document.querySelector(".third")
const clickFour = document.querySelector(".fourth")
const clickFive = document.querySelector(".fifth")
eventOne.addEventListener('click', updateColorOne)
eventtwo.addEventListener('click', updateColorTwo)
eventthre.addEventListener('click', updateColorThree)
eventfour.addEventListener('click', updateColorFour)
eventfive.addEventListener('click', updateColorFive)

function updateColorOne(event){
  let color = event.target
  color.style.color = " hsl(238, 29%, 16%)"
  color.style.fontWeight = "bold"
  updateFunction(lightOne, clickOne)
  setTimeout(()=>{
    color.style.color = "hsl(237, 12%, 33%)"
    color.style.fontWeight ="100"
    

  },2000)


}
function updateColorTwo(event){
  let color = event.target
  color.style.color = " hsl(238, 29%, 16%)"
  color.style.fontWeight = "bold"
  updateFunction(lightTwo, clickTwo)
  setTimeout(()=>{
    color.style.color = "hsl(237, 12%, 33%)"
    color.style.fontWeight ="100"
    

  },2000)

}
function updateColorThree(event){
  let color = event.target
  color.style.color = " hsl(238, 29%, 16%)"
  color.style.fontWeight = "bold"
  updateFunction(lightThree, clickThree)
  setTimeout(()=>{
    color.style.color = "hsl(237, 12%, 33%)"
    color.style.fontWeight ="100"
    

  },2000)

}
function updateColorFour(event){
  let color = event.target
  color.style.color = " hsl(238, 29%, 16%)"
  color.style.fontWeight = "bold"
  updateFunction(lightFour,clickFour)
  setTimeout(()=>{
    color.style.color = "hsl(237, 12%, 33%)"
    color.style.fontWeight ="100"
    

  },2000)

}
function updateColorFive(event){
  let color = event.target
  color.style.color = " hsl(238, 29%, 16%)"
  color.style.fontWeight = "bold"
  updateFunction(lightFive,clickFive)
  setTimeout(()=>{
    color.style.color = "hsl(237, 12%, 33%)"
    color.style.fontWeight ="100"
    

  },2000)

}

function updateFunction(element, click){
  if(element.classList.contains("hide")){
    element.classList.remove("hide")
    click.classList.toggle("click")
  }else{
    element.classList.add("hide")
    click.classList.remove("click")
  }

}