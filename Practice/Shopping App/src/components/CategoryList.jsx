import { useEffect, useState } from "react";

const CategoryList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const responce = await fetch("https://dummyjson.com/products/categories");
    const result = await responce.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []); //initial Render

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.map((elem) => {
        return (
          <p
            key={elem.name}
            className="p-4 rounded-lg bg-indigo-100 text-indigo-800 font-medium text-center shadow hover:bg-indigo-200 transition duration-200"
          >
            {elem.name}
          </p>
        );
      })}
    </div>
  );
};

export { CategoryList };
