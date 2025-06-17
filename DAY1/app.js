 window.console.log("hello From js! .. ");

 //let const var

//  let age=30;
//  const year= 2020;
//  var block =25;
//  console.log(age, year, block);
// output=(30, 2020, 25)
// //   ------------------
// console.log(age);
// var age = 20;   // declaration & intitilization 

// console.log(age);

// var age=30;  // re -declaration
// console.log(age);
// output undefined   20   30
//-------------------------------


// let age=22;
// console.log(age);
// age =23;
// console.log(age);

// console.log(1+1);
// console.log('1'+1);
// console.log(1+'1');
// console.log('1'+'1');


// console.log(1-1);
// console.log('a'-1);
// console.log(1-'a');
// console.log('1'-'a');


// console.log(1*1);
// console.log('a'*1);
// console.log(1*'a');
// console.log('1'*'a');



// console.log(1/1);
// console.log('a'/1);
// console.log(1/'a');
// console.log('1'/'a');
// in javascript it will convert the string to a number and appliy arthemtic opertions is called type coersion implict 
// console.log(1-1);
// console.log('5'-1);
// console.log(1-'3');
// console.log('6'-'7');

// functions in javascript
// let juice=50;
// let gstonjuice=0.1;
// let fries=70;
// let gstonfires=0.05;
// let juiceBillAmount= juice+(gstonjuice*juice);
// let firesBillAmount=fries+(gstonfires*fries);
// let finalBill=juiceBillAmount+firesBillAmount;
// console.log("final bill: " ,finalBill);

//adding fuction to this keyword
//1. function declation
// let res1=calucalteBillAmount(60,0.1);
// printBill("mango",res1);

// function printBill(name,amount){
//     console.log("---------------");
//     console.log("your bill for ",name);
//     console.log("Rs. ",amount);
//     console.log("----------------");
// }
// function calucalteBillAmount(price,gst){
//     console.log("caluclating");
//     let billAmount=price+price*gst;
//     return billAmount;
// }
// let res2=calucalteBillAmount(50,0.1);
// printBill("orange juice",res2);
// let res3=calucalteBillAmount(110,0.05);
// printBill("Fries",res3);

// function printBill(name,amount){
//     console.log("---------------");
//     console.log("your bill for ",name);
//     console.log("dollors ",amount);
//     console.log("----------------");
// }

//2. function assignment  (named function) 
// const printBill= function printBillXYZ(name,amount){

// };

// const calucalteBillAmount= function calucalteBillAmountXYZ(price,gst){};

// let res2=calucalteBillAmount(50,0.1);
// printBill("orange juice",res2);
// let res3=calucalteBillAmount(110,0.05);
// printBill("Fries",res3);

//3. function assinment (anonymus function)
// const calucalteBillAmount= function (){

// };
