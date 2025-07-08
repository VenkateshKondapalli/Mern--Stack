import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { TrendingPage } from "./pages/TrendingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/view" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
