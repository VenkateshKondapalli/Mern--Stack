import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      {/* <a href="./View">ViewPage</a> */}
      <Link to="/view">View_page_</Link>
    </div>
  );
};
export { HomePage };
