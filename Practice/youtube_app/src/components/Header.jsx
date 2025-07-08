const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <h2 className="text-red-600 font-extrabold text-2xl tracking-wide">
        YouTube
      </h2>

      <div className="flex items-center gap-2 flex-1 justify-center max-w-2xl">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 h-10 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
        />
        <button className="h-10 px-6 bg-red-500 text-white rounded-r-md hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">
          Search
        </button>
      </div>

      <div className="h-9 w-9 rounded-full bg-red-800"></div>
    </header>
  );
};

export { Header };
