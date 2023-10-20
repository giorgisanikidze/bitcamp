let accordion = document.querySelectorAll(".accordion");



accordion.forEach((item) => {
    const arrow = item.querySelector(".arrow");
    const answer = item.querySelector(".answer");
    const image = item.querySelector(".image");



    arrow.addEventListener("click", () => {
        if(answer.style.display == "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
        }


        if(image.style.rotate === "0deg"){
            image.style.rotate = "180deg";
        }
        else{
            image.style.rotate = "0deg";
        }
        
    })
})






