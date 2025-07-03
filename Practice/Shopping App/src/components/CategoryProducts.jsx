import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProductResultCard } from "./ProductResultCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);
  console.log(name);

  const getData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${name}`
    );
    const result = await response.json();
    setCategory(result.products);
  };

  useEffect(() => {
    getData();
  }, [name]);

  console.log(category);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 capitalize mb-6">
          Category: {name}
        </h2>

        <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {category.map((elem) => (
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
      </main>

      <Footer />
    </div>
  );
};

export default CategoryProducts;
