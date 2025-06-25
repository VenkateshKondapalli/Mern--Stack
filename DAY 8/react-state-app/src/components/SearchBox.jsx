import { useState } from "react";
import "./searchBox.css";

const SearchBox = () => {
  const [monitor, remote] = useState();
  const handleSearch = (e) => {
    remote(e.target.value);
  };
  return (
    <div className="searchBox">
      <input type="text" onKeyUp={handleSearch} />
      <h3>{monitor}</h3>
    </div>
  );
};
export { SearchBox };
