import { countries } from "./countries";

// 1 - Declare an empty array;
//let arr = [];





// 2 - Declare an array with more than 5 number of elements
//let arr = [1, 2, 3, 4, 5, 6, 7];



// 3 - Find the length of your array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.length);



// 4 - Get the first item, the middle item and the last item of the array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr[0], arr[Math.round((arr.length-1)/2)], arr[arr.length-1]);



// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.The array size should be greater than 5
// let mixedDataTypes = [1, "string", 3.12, true, "hello", false];
// console.log(mixedDataTypes.length);



// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];



// 7 - Print the array using console.log()
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);



// 8 - Print the number of companies in the array
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.length);



// 9 - Print the first company, middle and last company
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies[0], it[Math.round((itCompanies.length-1)/2)], itCompanies[itCompanies.length-1]);



// 10 - Print out each company
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// for(let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i]);
// }


// 11 - Change each company name to uppercase one by one and print them out
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }



// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.join(" "));



// 13 - Check if a certain company exists in the itCompanies array.If it exist return the company else return a company is not found
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let input = prompt("enter company: ");
// if(itCompanies.includes(input)){
//     console.log(input);
// }else{
//     console.log("a company is not found");
// }



// 14 - Filter out companies which have more than one 'o' without the filter method
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let counter = 0;
// for(let i = 0; i < itCompanies.length; i++){
//     for(let t = 0; t < itCompanies[i].length; t++){
//         if(itCompanies[i][t] == "o"){
//             counter++;
//         }
//     }
//     if(counter > 1){
//         let index = itCompanies.indexOf(itCompanies[i]);
//         itCompanies.splice(index, 1);
//         i--;
//         counter = 0;
//     }else{
//         counter = 0;
//     }
// }
// console.log(itCompanies);




// 15 - Sort the array using sort() method
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.sort());





// 16 - Reverse the array using reverse() method
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.reverse());




// 17 - Slice out the first 3 companies from the array
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.slice(0, 3));




// 18 - Slice out the last 3 companies from the array
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));




// 19 - Slice out the middle IT company or companies from the array
// let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let itCompanies = ["Microsoft", "IBM", "Oracle"];
// for(let i = 0; i < itCompanies.length; i++){
//     if(Companies.includes(itCompanies[i])){
//         let index = Companies.indexOf(itCompanies[i]);
//         Companies.splice(index, 1);
//     }
// }
// console.log(Companies);



// 20 - Remove the first IT company from the array
// let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let itCompanies = ["Microsoft", "IBM", "Oracle"];
// let index = Companies.indexOf(itCompanies[0]);
// for(let i = 0; i < itCompanies.length; i++){
//     if(Companies.includes(itCompanies[i])){
//         let index2 = Companies.indexOf(itCompanies[i]);
//         if(index2 < index){
//             index = index2;
//         }        
//     }
// }
// Companies.splice(index, 1);
// console.log(Companies);





// 21 - Remove the middle IT company or companies from the array




// 22 - Remove the last IT company from the array
// let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let itCompanies = ["Microsoft", "IBM", "Oracle"];
// let index = Companies.indexOf(itCompanies[0]);
// for(let i = 0; i < itCompanies.length; i++){
//     if(Companies.includes(itCompanies[i])){
//         let index2 = Companies.indexOf(itCompanies[i]);
//         if(index2 > index){
//             index = index2;
//         }        
//     }
// }
// Companies.splice(index, 1);
// console.log(Companies);




// 23 - Remove all IT companies
// let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// let itCompanies = ["Microsoft", "IBM", "Oracle"];
// for(let i = 0; i < itCompanies.length; i++){
//     if(Companies.includes(itCompanies[i])){
//         let index = Companies.indexOf(itCompanies[i]); 
//         Companies.splice(index, 1);
//         i--;    
//     }
// }
// console.log(Companies);


// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js 
// and store the webTechs array in to this file.Access both file in main.js file

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]






// 24 - const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if(shoppingCart.includes("Meat") == false){
//     shoppingCart.unshift("Meat");
// }
// console.log(shoppingCart);



// 25 - add Sugar at the end of you shopping cart if it has not been already added
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if(shoppingCart.includes("Sugar") == false){
//     shoppingCart.push("Sugar");
// }
// console.log(shoppingCart);




// 26 - remove 'Honey' if you are allergic to honey
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let isAllergic = prompt("are you allergic to honey? ");
// if(isAllergic.toLocaleLowerCase() == "yes"){
//     shoppingCart.splice(3, 1);
// }
// console.log(shoppingCart);




// 27 - modify  Tea to 'Green Tea' 
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart[2] = "Green Tea";
// console.log(shoppingCart);






// 28 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//      If it does not exist add to the countries list.

// 29 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//      If it does not exist add Sass to the array and print the array.




