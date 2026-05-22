import './style.css';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/tt0110475' element={<MovieInfo />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
