const hamburger = document.querySelector(".hamburger");
const navs = document.querySelector(".navs");

hamburger.addEventListener("click", () =>{
    if(navs.style.display == "none"){
        navs.style.display = "flex"
    }else{
        navs.style.display = "none";
    }
})