import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResult } from "../components/SearchResult";

const SearchPage = (props) => {
  const { text, handleSerachText } = props;
  return (
    <div>
      <Header text={text} handleSearchText={handleSerachText} />
      <p>
        Search Text for:
        <span className="text-red-800 font-bold">{text}</span>
      </p>
      <SearchResult text={text} />
      <Footer />
    </div>
  );
};
export { SearchPage };
