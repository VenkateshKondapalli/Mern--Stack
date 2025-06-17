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

// const person1= {
//      name:'K Venkatesh',
//         height: 5.11,
//         weight: 60,
//         collage: 'lpu',
//         rollNo: 12215022,
    
// }

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
// const person1= {
//      name:'K Venkatesh',
//         height: 5.11,
//         weight: 60,
//         collage: 'lpu',
//         rollNo: 12215022,
//         marks: {
//             maths:20,
//             evs: 30,
//         }
// }
// const person2= {...person1};
// person2.name="Raj";
// person2.marks.maths=49;
// console.log("person1: ",person1 );
// console.log("person2",person2);
//there are two containers in js they are array and objects


// ----------------------///Array///------------------------------
// const arr1=['tata','mahindra','suzuki','hundai'];
// const arr2=['kia','byd','audi'];
// console.log(arr1);
// //read a single value in an array
// console.log(arr1[1]);
// 1.
// const company=arr1[1];
// console.log(company);
//2
// const [a,b,c]=arr1
// console.log(b,c,a);
// const [x,y,z]=arr
// console.log(z,x,y);

// -------------------- 
//ADD
// const arr=['tata','mahindra','suzuki','hundai'];
// arr[10]="honda"
// arr.push("honda");
// arr.pop("honda");
// arr.shift();removed the first element in an array
// arr.unshift("kia"); adding first element to an array

// console.log(arr);
// const arr=['tata','mahindra','suzuki','hundai'];
// console.log(arr); 
// in splice in that first poistion is for the index and for second is to which index we need to delete later we will add that elements in that position
// arr.splice(1,2,"kia","byd","honda"); if want to delete the element in one position and add different element in that position 
// arr.splice(1,1); -->remove one Elementin that position
// arr.splice(1,0,"hero"); -->adding new Element in that position 

// console.log(arr);

//-----------------------SEARCH METHODS IN ARRAY--------------------------------
// const arr=['tata','mahindra','suzuki','hundai'];
// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("hundai"));
// const arr=[
//     {name:"likhilesh", city:"delhi"},
//     {name:"abhinav", city:"kanpur"},
//     {name:"summet", city:"mumbai"},
// ];
// console.log(arr.indexOf({name:"likhilesh", city:"delhi"}));
// const arr=["ab","bc","fh","ab","ih"];
//indexof("ab")-->0
//lastIndexOf("ab")-->3
//indexOf("bc")--->1

//includes("xy")-->True
// const myFunc= (a)=>{
//     console.log(a);
//    if(arr.includes("mn")){
//     return true;
//    }else return false;
// }
// const arr=["ab","mn","xy","ab","bc"];
// const elem =arr.find(myFunc);
// console.log(elem)
// const arr=[
//     {name:"likhilesh", city:"delhi"},
//     {name:"abhinav", city:"kanpur"},
//     {name:"summet", city:"mumbai"},
// ];
// const myFunc= (a)=>{
//     if(a.name==="abhinav") return true
//     else return false;
// }
// const ans= arr.find(myFunc);
// console.log(ans);

//for find it will required for value but for maps it will required for storied element

const arr=[
    {name:"likhilesh", city:"delhi",score:35},
    {name:"abhinav", city:"kanpur",score:24},
    {name:"summet", city:"mumbai",score:42},
];
const myFunc=(elem)=>{
    if(elem.score<25){
        return {...elem , remark :"Fail"};
    }else{
        
        return {...elem , remark :"Pass"};
    }
}
const resArr= arr.map(myFunc);
console.log("resArr: ",resArr);
