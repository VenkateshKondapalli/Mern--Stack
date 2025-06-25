console.log("hello");
const doomRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(doomRoot);

// const App = (arr) => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };
const arr = [
  {
    name: "Venkatesh",
    score: 29,
  },
  {
    name: "Sumeet",
    score: 16,
  },
  {
    name: "Mohit",
    score: 39,
  },
  {
    name: "Rakesh",
    score: 47,
  },
];

const styleObj = {
  color: "purple",
  fontSize: "1.5 rem",
  fondWeight: "600",
};
const Card = (props) => {
  const { title, score } = props;
  return (
    <div className="card">
      <h3 style={{ color: "red" }}>{title}</h3>
      <p>{score}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="parent">
      {arr.map((elem) => {
        return <Card title={elem.name} score={elem.score} key={elem.name} />; //it is cards for place holder
      })}
    </div>
  );
};

reactRoot.render(App());
