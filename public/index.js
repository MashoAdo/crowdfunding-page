const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const menuLogo = document.getElementById("menu-button")
const main = document.getElementById("main")

const backProjectBtn = document.getElementById("back-this-project-button")
const backProject = document.getElementById("back-this-project")
const closeBackProject = document.getElementById("close-button-back-project")

const radioBtn = document.querySelectorAll("#radio-btn")
const radio = document.querySelectorAll(".radio")

const continueBtn = document.querySelectorAll(".continue")

const thanksSupport = document.getElementById("thanks-support")
const removeSupportPage = document.getElementById("remove-support-page")

const pledge2Border = document.getElementsByClassName("pledge2")
// when clicked display menu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu")
  main.classList.toggle("opacity")
});
// When clicked it displays the back project section
backProjectBtn.addEventListener("click", () => {
  backProject.classList.add("show")
})
// Remove the back project section
closeBackProject.addEventListener("click", () => {
  backProject.classList.remove("show")
})
// use a spread operator to "convert" nodelist object to an array
const radiobuttonsArray = [...radioBtn]
const radioArray = [...radio]

const arrPledge = [...pledge2Border]

// add background to radio button 
radiobuttonsArray.forEach((item,index) =>{
  item.addEventListener("click", ()=>{
    // remove the initial background of the radio btn,to avoid the background being applied to two or more btns.//
    radioArray.forEach(r =>{
      r.classList.remove("background")
    })
    // remove border color for other pledge2 before selecting a new one
    arrPledge.forEach(p =>{
      p.classList.remove("pledge2-border")
    })
    // add a new background to the radio btn
    radioArray[index].classList.toggle("background")
  //  add pledge border
  arrPledge[index].classList.add("pledge2-border")
  })
})

// // Advance to the support page when the continue button is clicked
// const continueBtnArr = [...continueBtn]
// console.log(continueBtnArr)

// continueBtnArr.forEach (c =>{
//   c.addEventListener("click", () =>{
//     // Remove the back this project section
//     backProject.classList.remove("show")
//     thanksSupport.classList.add("show-support")
//   })
// })

// Remove support page
removeSupportPage.addEventListener("click", ()=>{
  thanksSupport.classList.add("top")
})