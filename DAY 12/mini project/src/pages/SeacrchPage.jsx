import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResult } from "../components/SearchResult";

const SearchPage = (params) => {
  const { text, handleSearchText } = params;

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main>
        <p>
          Search results for:
          <span className="text-red-800 font-bold">{text}</span>
        </p>
        <SearchResult searchQuery={text} />
      </main>
      <Footer />
    </div>
  );
};

export { SearchPage };
