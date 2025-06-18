//DOM- Document Object Model
// console.log("window",window);
// console.log("window.document",window.document);
// console.dir(document.children[0].children[1].children[0]);

//-----------------------------------------------------------------
// 1.document.getElementsByTagName --> [] give array like structer  (itreables) (html collections)
// const headings=document.getElementsByTagName("h3");
// console.log("heading: ",headings); 
// const header=document.getElementsByTagName("header");
// console.log("heading: ",header); 
// headings[0].innerText= "Hellon Rishabh!";
// headings[1].innerText="hello Monan!";


// 2.document.getElementsByClassName --> [] give array like structure  (itreables) (html collections)
// const elements=document.getElementsByClassName("text-brown");
// console.log(elements);
// elements[0].style.color="brown";
// elements[1].style.color="brown";

// 3. document.getElementById---> Element or null
// const text=document.getElementById("text-1");
// console.log(text);
// text.style.backgroundColor="lime"

//4.document.querySelectorAll selects all the tags,class and id that contains it is print an array
// const titles= document.querySelectorAll("h3");

// const textBrownElement= document.querySelectorAll(".text-brown");

// const textpara= document.querySelectorAll("#text-1")

// const textpara2= document.querySelectorAll("#text-2")
// console.log(titles);
// console.log(textBrownElement);
// console.log(textpara);
// console.log(textpara2);
//5. document.querySelector() give for first element

// const titles= document.querySelector("h3");

// const textBrownElement= document.querySelector(".text-brown");

// const textpara= document.querySelector("#text-1")

// console.log(titles);
// console.log(textBrownElement);
// console.log(textpara);