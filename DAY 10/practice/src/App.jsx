import { useState } from "react";
import "./App.css";
import { PRODUCTS } from "./products";
import { Card } from "./Card.jsx";

const App = () => {
  // console.log(PRODUCTS);
  const [product, setProducts] = useState(PRODUCTS);

  const handleSortLowFirst = () => {
    const sorted = [...product].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const handleSortHighFirst = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };
  const handle999Filter = () => {
    const temp = [...product].filter((val) => {
      return val.price < 999;
    });
    setProducts(temp);
  };
  const handleReset = () => {
    setProducts(PRODUCTS);
  };

  return (
    <div className="main-container">
      <div className="filters-container">
        <button id="sort-asc-btn" onClick={handleSortLowFirst}>
          Price (Low to High)
        </button>
        <button id="sort-desc-btn" onClick={handleSortHighFirst}>
          Price (High to Low)
        </button>
        <button id="filter-999-btn" onClick={handle999Filter}>
          Below Rs.999
        </button>
        <button id="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div id="cards-container">
        {product.map((elem) => {
          return <Card title={elem.title} price={elem.price} />;
        })}
      </div>
    </div>
  );
};

export default App;
