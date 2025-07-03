import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ViewPage } from "./pages/ViewPage";
import { SearchPage } from "./pages/SearchPage";
import { PageNotFound } from "./pages/PageNotFound";
import { useState } from "react";
import CategoryProducts from "./components/CategoryProducts";
const App = () => {
  const [text, setText] = useState("");
  const handleSearchText = (newVal) => {
    setText(newVal);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage text={text} handleSearchText={handleSearchText} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage text={text} handleSearchText={handleSearchText} />
          }
        />
        <Route
          path="/:productId/view"
          element={<ViewPage text={text} handleSearchText={handleSearchText} />}
        />

        <Route path="/category/:name" element={<CategoryProducts />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
