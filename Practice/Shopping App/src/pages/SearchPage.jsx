import { useSearchParams } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResultPage } from "../components/SearchResultPage";
import { useEffect } from "react";

const SearchPage = (props) => {
  const { text, handleSearchText } = props;
  // console.log("searchPage: ", props);
  const [searchParams, setSearchParam] = useSearchParams();
  useEffect(() => {
    const searchParamsForURL = searchParams.get("text");
    if (searchParamsForURL) {
      handleSearchText(searchParamsForURL);
    }
  }, []);
  useEffect(() => {
    console.log("text:", text);
    setSearchParam((prev) => {
      prev.set("text", text);
      return prev;
    });
  }, [text, searchParams]);
  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main>
        <SearchResultPage text={text} />
      </main>
      <Footer />
    </div>
  );
};
export { SearchPage };
