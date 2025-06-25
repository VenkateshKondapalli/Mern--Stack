import React from "react";
import ReactDOM from "react-dom/client";

const doomRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(doomRoot);

const App = () => {
  console.log("venkatesh");
  return (
    <div>
      <h1>Hello from React APP!</h1>
    </div>
  );
};
reactRoot.render(<App />);
