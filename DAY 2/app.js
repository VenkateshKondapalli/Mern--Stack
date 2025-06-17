// Arrow function : adding => insted of using functions

// const printBill=(txt)=>{
//     console.log("---------------");
//     console.log("RS: ",txt);
//     console.log("----------------");
// }
// // printBill();
const calucalteBillAmountForFood= (price) =>{
    return price*1.05
};
const calucalteBillAmountForcloths= (price) =>{
    return price*1.12
}

const calucalteBillAmountForDrinks= (price)=>{
    return price*1.2;
};
// const generateBill= (food,cloths,drinks) =>{
// const price1= calucalteBillAmountForFood(food);
// const price2= calucalteBillAmountForcloths(cloths);
// const price3= calucalteBillAmountForDrinks(drinks);
// const finalValue= price1+price2+price3;
// printBill(finalValue);
// };

// generateBill(100,400,100);

// ------------------------ higher order function
// Call backs
const printBillForFood =(txt)=>{
    console.log("total amount for food is",txt);
};
const printBillForFoodAndDrinks=(txt)=>{
    console.log("total amount for food and drinks",txt);
};
const printBillForAll =(txt)=>{
    console.log("total amount for food ,drinks and cloths is",txt);
};


const generateBill= (food,cloths,drinks,cd) =>{
const price1= calucalteBillAmountForFood(food);
const price2= calucalteBillAmountForcloths(cloths);
const price3= calucalteBillAmountForDrinks(drinks);
const finalValue= price1+price2+price3;
cd(finalValue);
};
generateBill(100,0,0,printBillForFood); 
generateBill(100,0,100,printBillForFoodAndDrinks); 
generateBill(100,400,100,printBillForAll); 
