let accordion = document.querySelectorAll(".accordion");
let answers = document.querySelectorAll(".answer");



    accordion.forEach((item) => {
        const question = item.querySelector(".question")
        const arrow = item.querySelector(".arrow");
        const answer = item.querySelector(".answer");
        const image = item.querySelector(".image");



        question.addEventListener("click", () => {
            if (answer.style.display == "block") {
                answer.style.display = "none";
                question.style.fontWeight = 'normal'
            } else {
                answer.style.display = "block";
                question.style.fontWeight = 'bold'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }

        })



        arrow.addEventListener("click", () => {
            if (answer.style.display == "block") {
                answer.style.display = "none";
                question.style.fontWeight = 'normal'
            } else {
                answer.style.display = "block";
                question.style.fontWeight = 'bold'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }
        
        })
    })






