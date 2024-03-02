import logo from './logo.svg';
import './App.css';
import entrance from './farm_entrance.jpg';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">Home </a>
        <a className="inactive" href="">Animals </a>
        <a className="inactive" href="">About</a>
      </div>
      <header className="App-header">
        <img src={entrance} className="header_pic" alt="farm_entrance" />
      </header>
      <body>
        <p>Body</p>
      </body>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
