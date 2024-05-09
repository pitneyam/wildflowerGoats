import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Animals from './components/Animals';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="*"/>

        </Routes>
      </BrowserRouter>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
