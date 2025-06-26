import { useState } from "react";
const App = () => {
  const [arr, setArr] = useState([]);

  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const city = e.target.city.value;

    setArr((prev) => {
      const temp = [...prev];
      temp.push({ name, city });
      return temp;
    });
  };

  const handleDelete = (idx) => {
    setArr((prev) => {
      const temp = [...prev];
      temp.splice(idx, 1);
      return temp;
    });
  };
  return (
    <div>
      <form onSubmit={handleName}>
        <label>Enter Name</label>
        <input name="name" type="text" placeholder="name" />
        <br />
        <label>Enter city </label>
        <input type="text" placeholder="city" name="city" />
        <br></br>
        <input type="submit" value="add" />
      </form>

      {arr.map((elem, idx) => {
        return (
          <div key={idx}>
            <h3>{elem.name}</h3>
            <h3>{elem.city}</h3>
            <button
              onClick={() => {
                handleDelete(idx);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
