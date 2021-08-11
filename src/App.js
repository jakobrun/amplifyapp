import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Some dev stuff</h1>
      <a href={process.env.REACT_APP_TM_WEB_URL}>tm.is</a>
    </div>
  );
}

export default App;
