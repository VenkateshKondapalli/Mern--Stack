import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SeacrchPage";
import { ViewPage } from "./pages/ViewPage";
import { NotFoundPage } from "./pages/PageNotFound";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState(""); // a

  const handleSearchText = (newVal) => {
    setText(newVal); // noted! --> a
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage text={text} handleSearchText={handleSearchText} x="y" />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage text={text} handleSearchText={handleSearchText} />
          }
        />
        <Route path="/:productId/view" element={<ViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
