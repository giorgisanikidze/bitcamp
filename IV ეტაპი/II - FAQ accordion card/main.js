let accordion = document.querySelectorAll(".accordion");
let answers = document.querySelectorAll(".answer");



    accordion.forEach((item) => {
        const question = item.querySelector(".question")
        const answer = item.querySelector(".answer");
        const image = item.querySelector(".image");



        question.addEventListener("click", () => {
            if (answer.style.height == '0px' || answer.style.height == 0) {
                console.log(answer.style.height)
                answer.style.height = '100px';
                question.style.fontWeight = 'bold'
            } else {
                answer.style.height = 0;
                question.style.fontWeight = 'normal'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }

        })



        image.addEventListener("click", () => {
            if (answer.style.height == '0px' || answer.style.height == 0) {
                console.log(answer.style.height)
                answer.style.height = '100px';
                question.style.fontWeight = 'bold'
            } else {
                answer.style.height = 0;
                question.style.fontWeight = 'normal'
            }


            if (image.style.rotate === "0deg") {
                image.style.rotate = "180deg";
            }
            else {
                image.style.rotate = "0deg";
            }
        
        })
    })






