// import { useState } from "react";

import { useState } from "react";

// const { useState } = require("react");

// const App = () => {
//   // let searchText = "venkatesh";
//   const [monitor, remote] = useState();
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     remote(value);
//   };

//   return (
//     <div>
//       <input type="text" onKeyUp={handleSearch} />
//       <h2>{monitor}</h2>
//     </div>
//   );
// };
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);
//   console.log(monitor);

//   const handleClick = () => {
//     remote(monitor + 1);
//     remote(monitor + 2);

//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>count:{monitor}</h2>
//     </div>
//   );
// };
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(0);
//   console.log(monitor);

//   const handleClick = () => {
//     remote((prev) => {
//       return prev + 1;
//     });
//     remote((prev) => {
//       return prev + 1;
//     });

//     console.log(monitor);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <h2>count:{monitor}</h2>
//     </div>
//   );
// };
// export default App;

// import { useState } from "react";

// const App = () => {
//   const [monitor, remote] = useState(() => {
//     const val = localStorage.getItem("counter-value");
//     if (val) {
//       return parseInt(val); //in localstorage the value is in string so we need to ubdate the value to int we use parseInt in it to convret value to string
//     }
//     return 0;
//   });
//   console.log(monitor);

//   const handleClick = () => {
//     remote((prev) => {
//       const newValue = prev + 1;
//       localStorage.setItem("counter-value", newValue);
//       return newValue;
//     });

//     console.log(monitor);
//   };
//   const handleReset = () => {
//     remote(0);
//     localStorage.setItem("counter-value", 0);
//   };
//   const handleDecrement = () => {
//     remote((prev) => {
//       let newValue = prev - 1;
//       if (newValue < 0) {
//         newValue = 0;
//       }
//       localStorage.setItem("counter-value", newValue);
//       return newValue;
//     });
//   };

//   return (
//     <div>
//       <h2>count:{monitor}</h2>
//       <button onClick={handleClick}>++</button>
//       <button onClick={handleReset}>00</button>
//       <button onClick={handleDecrement}>--</button>
//     </div>
//   );
// };
// export default App;

// import { useState } from "react";
// const App = () => {
//   const [searchText, setSearchText] = useState(() => {
//     const val = localStorage.getItem("searchText");
//     if (val) {
//       return val;
//     }
//     return "arun";
//   });
//   console.log(searchText);

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     localStorage.setItem("searchText", val);
//     setSearchText(val);
//   };
//   return (
//     <div>
//       <input type="text" value={searchText} onChange={handleSearch} />
//       <h2>{searchText}</h2>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [arr, setArr] = useState(["kiwi", "banana"]);
  console.log("oldArr:", arr);

  const handleAddFruit = () => {
    setArr((prev) => {
      const temp = [...prev];
      temp.push("Mango");
      console.log("new Arr", temp);
      return temp;
    });
  };

  return (
    <div>
      <ul>
        {arr.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>
      <button onClick={handleAddFruit}>Add Mango</button>
    </div>
  );
};
export default App;
