import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeVideos } from "../components/HomeVideos";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeVideos />
      </main>
      <Footer />
    </div>
  );
};
export { HomePage };
