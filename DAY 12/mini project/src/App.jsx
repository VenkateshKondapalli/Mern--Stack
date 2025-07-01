import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SeacrchPage";
import { ViewPage } from "./pages/ViewPage";
import { NotFoundPage } from "./pages/PageNotFound";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const handleSerachText = (newval) => {
    setText(newval);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage text={text} handleSerachText={handleSerachText} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage text={text} handleSerachText={handleSerachText} />
          }
        />
        <Route path="/view" element={<ViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
