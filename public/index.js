const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")
const menuLogo = document.getElementById("menu-button")
const backProjectBtn = document.getElementById("back-this-project-button")
const backProject = document.getElementById("back-this-project")
const closeBackProject = document.getElementById("close-button-back-project")
const main = document.getElementById("main")
const radioBtn = document.querySelectorAll("#radio-btn")
const radio = document.querySelectorAll("#radio")
const continueBtn = document.querySelectorAll(".continue")
const thanksSupport = document.getElementById("thanks-support")
const removeSupportPage = document.getElementById("remove-support-page")
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

// Remove support page
removeSupportPage.addEventListener("click", ()=>{
  thanksSupport.classList.add("top")
})