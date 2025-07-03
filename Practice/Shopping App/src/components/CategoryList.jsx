import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const responce = await fetch(`https://dummyjson.com/products/categories`);
    const result = await responce.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategoryList = async (name) => {
    navigate(`/category/${name}`);
  };


  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.map((elem) => {
        return (
          <button
            key={elem.name}
            className="p-4 rounded-lg bg-indigo-100 text-indigo-800 font-medium text-center shadow hover:bg-indigo-200 transition duration-200"
            onClick={() => {
              handleCategoryList(elem.slug);
            }}
          >
            {elem.name}
          </button>
        );
      })}
    </div>
  );
};

export { CategoryList };
