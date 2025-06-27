import { useState } from "react";
const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  console.log(editIndex);

  const [fruits, setFruits] = useState([
    {
      name: "kiwi",
      color: "green",
      price: 600,
    },
    {
      name: "Banana",
      color: "yellow",
      price: 40,
    },
    {
      name: "Apple",
      color: "Red",
      price: 200,
    },
    {
      name: "Mango",
      color: "Yellow",
      price: 150,
    },
  ]);

  return (
    <div>
      <h1>Title</h1>
      {fruits.map((elem, idx) => {
        return (
            if(editIndex==idx){
                <div>
                <h1>Hello</h1>
                </div>
            }else{
                <div key={idx} style={{ backgroundColor: elem.color }}>
            <h3>{elem.name}</h3>
            <h4>{elem.color}</h4>
            <h3>{elem.price}</h3>
            <button
              onClick={() => {
                setEditIndex(idx);
              }}
            >
              Edit
            </button>
          </div>
            }
      
        );
        })}
    </div>
  );
};
export default App;
