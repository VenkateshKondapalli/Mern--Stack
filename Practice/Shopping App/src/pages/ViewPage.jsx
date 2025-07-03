import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ViewPage = (props) => {
  const { text, handleSearchText } = props;
  const params = useParams();
  const { productId } = params;
  const [product, setProduct] = useState({});

  const getData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main className="flex justify-center p-6 bg-gray-50 min-h-screen">
        {product?.id ? (
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p className="text-lg font-semibold text-green-600">
                ₹{Math.floor(product.price * 85)}{" "}
                {product.discountPercentage && (
                  <span className="text-sm text-red-500 ml-2">
                    -{product.discountPercentage}% Off
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Rating:</span> {product.rating}{" "}
                ⭐
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Brand:</span> {product.brand}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading product...</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export { ViewPage };
