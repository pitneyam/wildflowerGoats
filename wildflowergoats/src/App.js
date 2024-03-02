import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">Home </a>
        <a className="inactive" href="">Animals </a>
        <a className="inactive" href="">About</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
