const nav = document.querySelector("nav");
window.addEventListener("scroll",stickyScroll);

function stickyScroll(){
  if(document.documentElement.scrollTop>20){
    console.log("hey")
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
}