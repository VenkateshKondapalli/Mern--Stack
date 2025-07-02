import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoryList";

const HomePage = (props) => {
  // console.log("🟡 : obj:", props);
  const { text, handleSearchText } = props;

  return (
    <div>
      <Header text={text} handleSearchText={handleSearchText} />
      <main className="p-8">
        <div>
          <CategoryList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { HomePage };
