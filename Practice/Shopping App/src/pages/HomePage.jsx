import { CategoryList } from "../components/CategoryList";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const HomePage = (props) => {
  const { text, handleSearchText } = props;
  // console.log("🟡 : obj:", props);
  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main>
        <CategoryList />
      </main>
      <Footer />
    </div>
  );
};
export { HomePage };
