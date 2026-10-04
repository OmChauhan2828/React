import "./App.css";

function Title() {
  return <h1>I am the title</h1>;
}   


function description() {
  return <p>this is the description</p>;
}

function App() {
  return (
    <div>
      <h1>This is my first App Component</h1>
      <p>Inside app component this is paragraph</p>
      <Title />
  w  </div>
  );
}

export default App;