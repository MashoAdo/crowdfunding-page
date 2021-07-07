const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const menuLogo = document.getElementById("menu-button")
const main = document.getElementById("main")
const body = document.body

const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const aboutThisProject = document.getElementById("about-this-project")

const rewardButton = document.querySelectorAll("#reward-btn")
const remaining = document.querySelectorAll("#remaining")

const bookmark = document.getElementById("bookmark")

const backProject = document.getElementById("back-this-project")
const backProjectBtn = document.getElementById("back-this-project-button")
const closeBackProject = document.getElementById("close-button-back-project")

const radioBtn = document.querySelectorAll("#radio-btn")
const radio = document.querySelectorAll(".radio")

const continueBtn = document.querySelectorAll(".continue")

const thanksSupport = document.getElementById("thanks-support")
const removeSupportPage = document.getElementById("remove-support-page")

const pledge2Border = document.getElementsByClassName("pledge2")


// MENU JS//
// when clicked display menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  menu.classList.toggle("show-menu")
  main.classList.toggle("opacity")
})
body.addEventListener("click",(e) =>{
    if(e.target.id !=="menu") {
    menu.classList.remove("show-menu")
    main.classList.remove("opacity")
   }
})

// blur bookmark on click
bookmark.addEventListener("click", () =>{
  bookmark.classList.toggle("opacity")
  // remove hover after click
 bookmark.classList.toggle("no-hover")
})


// change background of select reward button when clicked and reduce the number of pledge left//
 // convert node to array
const remainingArr = [...remaining]
const rewardButtonArr = [...rewardButton]

rewardButtonArr.forEach((rb,i) =>{
  rb.addEventListener("click",()=>{
      rewardButtonArr.forEach(rb =>{
      rb.classList.remove("button-clicked")
    })

      rb.classList.toggle("button-clicked")
// get the innertxt and convert it to a number
   var number = parseInt(remainingArr[i].innerText) 
  //  calculate the remaining from pledge left after click
   var updateRem = number -1
  //  update the the page with the remaining pledge after one has been selected
   remainingArr[i].innerText = updateRem
  })
})
// When clicked it displays the back project section
backProjectBtn.addEventListener("click", () => {
  backProject.classList.add("show")
  section1.classList.add("opacity")
  section2.classList.add("opacity")
  aboutThisProject.classList.add("opacity")

})
// Remove the back project section
closeBackProject.addEventListener("click", () => {
  backProject.classList.remove("show")
  section1.classList.remove("opacity")
  section2.classList.remove("opacity")
  aboutThisProject.classList.remove("opacity")
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
const continueBtnArr = [...continueBtn]

continueBtnArr.forEach (c =>{
  c.addEventListener("click", () =>{
    // Remove the back this project section
    backProject.classList.remove("show")
    thanksSupport.classList.add("show-support")
    section1.classList.remove("opacity")
  section2.classList.remove("opacity")
  aboutThisProject.classList.remove("opacity")
  })
})

// Remove support page
removeSupportPage.addEventListener("click", ()=>{
  thanksSupport.classList.add("top")
})