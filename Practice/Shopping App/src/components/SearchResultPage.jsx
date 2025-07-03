import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResultPage = (props) => {
  const [result, setResults] = useState([]);
  const { text } = props;
  console.log(text);

  const getData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${text}`
    );
    const data = await response.json();
    // console.log(data);
    setResults(data.products);
  };

  useEffect(() => {
    getData();
  }, [text]);

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {result.map((elem) => (
        <ProductResultCard
          key={elem.id}
          id={elem.id}
          title={elem.title}
          price={elem.price}
          rating={elem.rating}
          thumbnail={elem.thumbnail}
        />
      ))}
    </div>
  );
};

export { SearchResultPage };
