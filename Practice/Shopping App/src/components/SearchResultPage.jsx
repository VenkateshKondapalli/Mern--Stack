import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 5;

const SearchResultPage = (props) => {
  const [result, setResults] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { text } = props;
  const [order, setOrder] = useState("asc");
  console.log(result);
  console.log(order);
  const getData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${text}&skip=${
        LIMIT * (pages - 1)
      }&limit=${LIMIT}&sortBy=title&order=${order}`
    );
    const data = await response.json();
    setResults(data.products);
    setTotalPages(Math.ceil(data.total / LIMIT));
  };

  useEffect(() => {
    const timeoutId = setTimeout(getData, 400);
    return () => clearTimeout(timeoutId);
  }, [text, pages, order]); // Debounce fetching

  const handlePages = (idx) => {
    const clampedPage = Math.max(1, Math.min(idx, totalPages));
    setPages(clampedPage);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        <h2 className="text-lg font-semibold">Sort Order:</h2>
        <button
          onClick={() => setOrder("asc")}
          className={`px-3 py-1 rounded ${
            order === "asc" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Asc
        </button>
        <button
          onClick={() => setOrder("desc")}
          className={`px-3 py-1 rounded ${
            order === "desc" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Desc
        </button>
      </div>
      {/* Product Cards Grid */}
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
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => handlePages(pages - 1)}
          disabled={pages === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Prev
        </button>

        <span className="text-lg font-semibold">
          {pages} / {totalPages}
        </span>

        <button
          onClick={() => handlePages(pages + 1)}
          disabled={pages === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { SearchResultPage };
