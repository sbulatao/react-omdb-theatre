import './style.css';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movies' element={<Movies />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
