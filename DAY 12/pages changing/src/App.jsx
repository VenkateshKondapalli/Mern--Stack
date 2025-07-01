import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SeacrchPage";
import { ViewPage } from "./pages/ViewPage";
import { PageNotFound } from "./pages/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
