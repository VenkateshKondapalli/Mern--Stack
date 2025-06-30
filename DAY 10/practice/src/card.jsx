// import { useState } from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="product-card">
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
};

export { Card };
