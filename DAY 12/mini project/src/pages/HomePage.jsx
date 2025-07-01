import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CategoryList } from "../components/CategoryList";

const HomePage = (props) => {
  const { text, handleSerachText } = props;
  return (
    <div>
      <Header text={text} handleSerachText={handleSerachText} />
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
