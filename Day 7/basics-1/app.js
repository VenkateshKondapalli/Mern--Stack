// console.log("hello everyone");
// React;

// const parentelem = document.getElementById("root");

// const list = document.createElement("ul");

// const newlist1 = document.createElement("li");
// newlist1.innerText = "Item1";
// const newlist2 = document.createElement("li");
// newlist1.innerText = "Item2";

// list.appendChild(newlist1);
// list.appendChild(newlist2);

// parentelem.appendChild(list);
// const item1 = React.createElement("li", {}, "Item 1");
// console.log(item1);
// const item2 = React.createElement("li", {}, "Item 2");
// const list = React.createElement("ul", {}, [item1, item2]);

// //in react create element there is threevalues are tag atribute and value
// //create a virtual DOM
// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);
// reactRoot.render(list);

// jsx is extention of js
// ------------------------------------------
const list = (
  <ul>
    <li>item1</li>
    <li>item2</li>
  </ul>
); //  creating through jsx it will create REACT Element
const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);

reactRoot.render(list);
