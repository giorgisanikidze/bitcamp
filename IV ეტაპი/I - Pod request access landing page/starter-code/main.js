

function email(){

    let emailIinput = document.getElementById("email-input");
    let emailText = document.getElementById("email-text");
    let email = emailIinput.value;
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailPattern.test(email)){
        emailText.style.display = "block"
    }else{
        emailText.style.display = "none"
    }

}