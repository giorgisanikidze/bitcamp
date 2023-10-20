// 1 - Write a code which can give grades to students according to theirs scores:
// 90 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

// let grade = prompt("enter your grade please: ");
// if(grade >= 90 && grade <= 100){
//     console.log("A");
// }else if(70 <= grade && grade < 90){
//     console.log("B");
// }else if(60 <= grade && grade <70){
//     console.log("C");
// }else if(50 <= grade && grade < 60){
//     console.log("D");
// }else{
//     console.log("F");
// }








// 2 - Check if the season is Autumn, Winter, Spring or Summer.If the user input is:
// September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//         March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt("enter month: ");
// if(month == "September" || month == "October" || month == "November"){
//     console.log("The season is autumn")
// } else if (month == "December" || month == "January" || month == "February"){
//     console.log("The season is winter")
// } else if (month == "March" || month == "April" || month == "May"){
//     console.log("the season is spring")
// } else if (month == "June" || month == "July" || month == "August") {
//     console.log("the season is spring")
// }






// 3 - Check if a day is weekend day or a working day.Your script will take day as an input.

//  	What is the day  today ? Saturday
//   	Saturday is a weekend.

//   	What is the day today ? saturDaY
//   	Saturday is a weekend.

//   	What is the day today ? Friday
//   	Friday is a working day.

//   	What is the day today ? FrIDAy
//   	Friday is a working day.

// let day = prompt("what is the day today ? ").toLowerCase();
// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
//     console.log(day + " is a working day.");
// }else if(day == "saturday" || day == "sunday"){
//     console.log(day + " is a weekend.");
// }







// 4 - Write a program which tells the number of days in a month.

//   	Enter a month: January
//   	January has 31 days.

//   	Enter a month: JANUARY
//   	January has 31 day

//   	Enter a month: February
//   	February has 28 days.

//   	Enter a month: FEbruary
//   	February has 28 days.

// let month = prompt("Enter a month: ").toLowerCase();
// if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
//     console.log(month + " has 31 days.");
// } else if (month == "april" || month == "june" || month == "september" || month == "november" ) {
//     console.log(month + " has 30 days.");
// }else if(month == "february"){
//     console.log( month + " has 28 days.")
// }