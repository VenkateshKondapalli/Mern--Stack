console.log("Array Iteration Methods");

// const arr=["cat","dog","elephant","tiger"];
// 1. Normal for loop
// for(let i=0;i<arr.length;i++){
//     const elem =arr[i];
//     console.log(elem);
// }

// 2.
// for(let i in arr){
//     //all the keys one by one (avoid)
//     const elem =arr[i];
//     console.log(elem);
// }

//3.
//  for(let i of arr){
//     all the values one by one (avoid)
//     console.log(i);
// }

//4.

// FOREACH
const arr = ["cat", "dog", "elephant", "tiger"];
// const myFunc= ()=>{
// console.log("hello");
// }
// arr.forEach(myFunc);
//in forEach(we can write function in side the for each)
arr.forEach(() => {
  console.log("hello");
}); //short form
