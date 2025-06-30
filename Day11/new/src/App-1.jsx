import { useEffect, useState } from "react";

const App = () => {
  // const getData = () => {
  //   const responce = fetch("https://dummyjson.com/users");
  //   // console.log(responce);

  //   responce
  //     .then((resp) => {
  //       const pr2 = resp.json();
  //       return pr2;
  //     })
  //     .catch((err) => {
  //       console.log("error:", err.message);
  //     })
  //     .then((data) => {
  //       console.log("data", data);
  //     });
  // };
  // getData();
  //when ever the browser sees the await then it will call this as fuction to the browser .after getting resopnce it will go to promise queue and it will later goes to call stack.
  //when we use useState in react to add a promise because of the function call it will call every time and because of the new address given to the useState. to not rerender infinite time we use useEffect in which we call callbackin first and second we give empty array means empty dependency array-> callback function called only once for first until we changed the data(onfirst /initial render)

  const [userList, setUsetList] = useState([]);
  console.log("start", userList);
  const getData = async () => {
    const responce = await fetch("https://dummyjson.com/users");
    console.log("inside getData");
    const data = await responce.json();
    console.log(data);
    setUsetList(data.users);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("After getData");

  return (
    <div>
      <h1>hello</h1>
      {userList.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.firstName}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default App;
