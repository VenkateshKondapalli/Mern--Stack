import { useNavigate } from "react-router";

const Header = (props) => {
  const { text, handleSearchText } = props;
  const navigate = useNavigate(); // hook :: special function ::  given react-router

  const handleSearch = () => {
    navigate(`/search/?text=${text}`);
  };

  return (
    <header className="flex bg-black p-4 justify-between ">
      <div>
        <p className="text-amber-300">Shopping App</p>
      </div>
      <div>
        <input
          className="border-1 border-amber-900 p-1 text-cyan-300"
          onChange={(e) => {
            handleSearchText(e.target.value);
          }}
          value={text}
        />
        <button
          className="border-1 border-amber-900 p-1 text-blue-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        <div className="h-8 w-8 rounded-full bg-purple-700"></div>
      </div>
    </header>
  );
};

export { Header };
