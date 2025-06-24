const doomRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(doomRoot);

reactRoot.render(
  <div>
    <h1>hello</h1>
    <div>
      <p>hi</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  </div>
);

const Card1 = (
  <div className="card">
    <h1>Invitaion</h1>
    <p>Description</p>
  </div>
);
const Card2 = (
  <div className="card">
    <h1>Warning</h1>
    <p>Description</p>
  </div>
);
const Card3 = (
  <div className="card">
    <h1>Notification</h1>
    <p>Description</p>
  </div>
);

const Container = (
  <div>
    {Card1}
    {Card2}
    {Card3}
  </div>
);
reactRoot.render(Container);
