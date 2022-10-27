import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      {/* // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
    </div>
  );
}

export default App;
