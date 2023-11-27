const billInput = document.querySelector("#pay");
const peopleInput = document.querySelector("#people");
const tipPerPerson = document.querySelector(".amount-tip");
const totalPerPerson = document.querySelector(".amount-total");
const tips = document.querySelectorAll(".percent");
const custom = document.querySelector(".custom");
const reset = document.querySelector(".reset")

let tipAmount = 0;
let billValue = 0;
let peopleValue = 0;


tips.forEach((e) => {
    e.addEventListener("click", () => {
        tips.forEach((element) => {
            if(element.classList.contains("active")){
                element.classList.remove("active");
                element.style.background = "#00474B";
                element.style.color = "white";
            }
        })
        e.classList.add("active");
        e.style.background = "#9FE8DF";
        e.style.color = "#00474B";
        tipAmount = e.innerHTML.slice(0, e.innerHTML.length-1);
        calculator()
    })
    
})



reset.addEventListener("click", () => {
    tipAmount = 0;
    billValue = 0;
    peopleValue = 0;
    custom.value = ""
    billInput.value = billValue;
    peopleInput.value = peopleValue
    tipPerPerson.innerHTML = "$0.00"
    totalPerPerson.innerHTML = "$0.00"
    tips.forEach((e) => {
        if(e.classList.contains("active")){
            e.classList.remove("active");
            e.style.background = "#00474B";
            e.style.color = "white";
        }
    })
    

})
custom.addEventListener("input", customFunction);
billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input" , peopleInputFunction);




function customFunction() {
    tips.forEach((e) => {
        if(e.classList.contains("active")){
            e.classList.remove("active");
            e.style.background = "#00474B";
            e.style.color = "white";
        }
    })
    tipAmount = custom.value
    calculator()
}
function billInputFunction(){
    billValue = billInput.value
    calculator()
}

function peopleInputFunction(){
    peopleValue = peopleInput.value
    calculator()
}



function calculator(){
    console.log()
    if (Number(billValue) > 0 && Number(peopleValue) > 0 && Number(tipAmount) > 0) {
        let tipPerPersonNumber = Math.round((billValue * (tipAmount / 100) / peopleValue) * 100) / 100;
        let totalPerPersonNumber = Math.round(((Number((billValue * (tipAmount / 100))) + Number(billValue)) / peopleValue) * 100) / 100;
        if (tipPerPersonNumber.toString().length > 10) {
            console.log(totalPerPersonNumber.length)
            tipPerPerson.innerHTML = "$" + tipPerPersonNumber.toExponential(2);   
        } else {
            tipPerPerson.innerHTML = "$" + Math.round((billValue * (tipAmount / 100) / peopleValue) * 100) / 100;
            
        }
        if (totalPerPersonNumber.toString().length > 10) {
            totalPerPerson.innerHTML = "$" + totalPerPersonNumber.toExponential(2)
        } else {
        totalPerPerson.innerHTML = "$" + Math.round(((Number((billValue * (tipAmount / 100))) + Number(billValue)) / peopleValue) * 100) / 100 ;
            
        }

}

}




















// let pay = document.querySelector("#pay");
// let percents = document.querySelectorAll(".percent");
// let custom = document.querySelector(".custom");
// let peopleAmount = document.querySelector("#people");
// let tipPerson = document.querySelector(".amount-tip");
// let totalPerson = document.querySelector(".amount-total");



// let percent = percentChoice();
// console.log(percent)


// pay.addEventListener("input" , () => {
//     console.log(pay.value)
// })


// function percentChoice() {
//     percents.forEach((e) => {
//         e.addEventListener("click", () =>{
//             percents.forEach((e) => {
//                 if(e.classList.contains("active")){
//                     e.classList.remove("active")
//                     e.style.background = "#00474B"
//                     e.style.color = "white"
//                 }
//             })
//             e.style.background = "#9FE8DF"
//             e.style.color = "#00474B"
//             e.classList.add("active");
//             return e.innerHTML;

//         })
//     })

// }
