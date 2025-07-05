import { useNavigate } from "react-router";

const Header = (props) => {
  const { text, handleSearchText } = props;
  console.log("Header Props", props);
  const navigator = useNavigate();

  const handleSearch = () => {
    navigator(`/search/?text=${text}`);
  };
  const handleHome = () => {
    navigator(`/`);
  };
  return (
    <header className="flex items-center justify-between bg-blue-100 p-4 shadow-md">
      <p className="text-blue-900 font-bold text-xl" onClick={handleHome}>
        Shopping App
      </p>

      <div className="flex items-center gap-3 flex-1 justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-96 h-10 border border-blue-400 px-4 rounded text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onChange={(e) => {
            handleSearchText(e.target.value);
          }}
          value={text}
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="h-9 w-9 rounded-full bg-blue-800"></div>
    </header>
  );
};

export { Header };
