let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#button");


let fnameImg = document.querySelector(".fname-img");
let lnameImg = document.querySelector(".lname-img");
let emailImg = document.querySelector(".email-img");
let passwordImg = document.querySelector(".password-img");




let fnameLabel = document.querySelector(".fname-label");
let lnameLabel = document.querySelector(".lname-label");
let emailLabel = document.querySelector(".email-label");
let passwordLabel = document.querySelector(".password-label");


let fnameValue;
let lnameValue;
let emailValue;
let passwordValue;





fname.addEventListener("input", (e) =>{
    fnameValue = fname.value;    
})

lname.addEventListener("input", (e) =>{
    lnameValue = lname.value;  
})

email.addEventListener("input", (e) =>{
    emailValue = email.value;
})

password.addEventListener("input", (e) =>{
    passwordValue = password.value;
})
button.addEventListener("click", () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(fnameValue.length == 0){
        fnameImg.style.display = "block";
        fnameLabel.style.display = "flex";
    }else{
        fnameImg.style.display = "none";
        fnameLabel.style.display = "none";
    }

    if(lnameValue.length == 0){
        lnameImg.style.display = "block";
        lnameLabel.style.display = "flex";
    }else{
        lnameImg.style.display = "none";
        lnameLabel.style.display = "none";
    }

    if(!emailPattern.test(emailValue)){
        emailImg.style.display = "block"
        emailLabel.style.display = "flex"
        email.value = "email@example/com"
    }else{
        emailImg.style.display = "none"
        emailLabel.style.display = "none"
    }

    if(passwordValue.length == 0){
        passwordImg.style.display = "block";
        passwordLabel.style.display = "flex";
    }else{
        passwordImg.style.display = "none";
        passwordLabel.style.display = "none";
    }



})




