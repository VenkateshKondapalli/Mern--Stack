// //object store key value pair keys should be string or symbol 
// // CURD opertions(c=create, u=Update, r=read, d=delete)

// // const cse022 ={
// //     name: "K Venkatesh ",
// //     address: "Vzm,Ap",
// //     bloodGroup: "B+",
// // };
// // //read the value of property
// // const studentName=cse022.name;
// // console.log(studentName);

// // //update the value of property
// // cse022.bloodGroup= "A+";

// // //add a key-value Pair 
// // cse022.collage= "LPU";
// // console.log(cse022);

// // //delete a key value pair
// // delete cse022.address;
// // console.log(cse022);

// //Primitives are all datatypes except object
// //Non Premitive are only objects
// // const person={
//     //     name:'K Venkatesh',
//     //     height: 5.11,
//     //     weight: 60,
//     //     collage: 'lpu',
//     //     rollNo: 12215022,
//     //     getBMI: ()=>{
//     //         console.log(person.weight);
//     //     },
//     // }
// //when we use this we need to use the function
// const person={
//     name:'K Venkatesh',
//     height: 1.9,
//     weight: 60,
//     collage: 'lpu',
//     rollNo: 12215022,
//     getBMI: function(){
//         bmi=this.weight/(this.height**2);
//         console.log(`bmi for ${this.name} is ${bmi}`);
//         if(bmi<20){
//             console.log("underweight")
//         }
//         else if(bmi<25){
//             console.log("fit")
//         }
//         else if(bmi<30){
//             console.log("overweight")
//         }
//         else{
//             console.log("obesity")
//         }
//     },
// }
// person.getBMI();
// person.weight=90;
// person.getBMI();

// const allKeys=Object.keys(person);
// console.log("all keys: ",allKeys);
// const allValues= Object.values(person);
// console.log("all Values: ",allValues);
// const allenteries=Object.entries(person);
// console.log("all enetrie: ",allenteries);

const person1= {
     name:'K Venkatesh',
        height: 5.11,
        weight: 60,
        collage: 'lpu',
        rollNo: 12215022,
        marks: {
            maths:20,
            evs: 30,
        }
}

// const person2=person1;
// // person1.name="Mohan";
// // console.log("person1: ",person1 );
// // person2.name ="RAj";
// console.log("person1: ",person1 );

// console.log("person2: ",person2);

// // -----------------de -stucturing
// const {name,weight}=person1;
// console.log('weight,name', weight,name)

//sprade operator it is a smart operator that it is like we can save the person1 data to person2 data in diff ernt address so there will be better but is also not deep copy.

const person2= {...person1};
person2.name="Raj";
person2.marks.maths=49;
console.log("person1: ",person1 );
console.log("person2",person2);

