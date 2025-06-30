import { useState } from "react";
import "./app.css";

const App = () => {
  const offBulb = "https://www.w3schools.com/js/pic_bulboff.gif";
  const onBulb = "https://www.w3schools.com/js/pic_bulbon.gif";

  const [bulb, setBulb] = useState([false, false, false, false, false]);
  console.log(bulb);

  const handleBulb = (idx) => {
    setBulb((prev) => prev.map((item, i) => (i === idx ? !item : item)));
  };

  return (
    <div className="bulb-wrapper">
      {bulb.map((elem, idx) => {
        return (
          <div key={idx} className="bulb-container">
            <div className="bulb-box">
              {elem ? <img src={onBulb} /> : <img src={offBulb} />}
            </div>
            <button
              className="switch-btn"
              onClick={() => {
                handleBulb(idx);
              }}
            >
              Switch
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
