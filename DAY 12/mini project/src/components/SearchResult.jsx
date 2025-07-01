import { useEffect } from "react";

const SearchResult = (props) => {
  const { text } = props;

  const getSearchResults = async () => {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=phone"
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getSearchResults();
  }, [text]);
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};
export { SearchResult };
