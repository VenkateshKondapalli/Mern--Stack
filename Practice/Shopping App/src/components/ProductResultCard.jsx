import { useNavigate } from "react-router";

const ProductResultCard = (props) => {
  const { id, title, price, rating, thumbnail } = props;
  const navigator = useNavigate();
  const handleViewProduct = () => {
    navigator(`/${id}/view`);
  };
  return (
    <div
      key={id}
      className="p-4 rounded-xl bg-white shadow hover:shadow-lg transition duration-300 w-full max-w-sm"
      onClick={handleViewProduct}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <p className="text-lg font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-blue-700 font-bold mb-1">₹{Math.floor(price * 85)}</p>
      <p className="text-yellow-600 font-medium">Rating: {rating} ⭐</p>
    </div>
  );
};
export { ProductResultCard };
