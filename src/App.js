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
import Login from './pages/Login';
import Posts from './pages/Posts';
import { useState, useEffect } from 'react';

function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false); // dark theme
  const [cart, setCart] = useState([]); // cart

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    // check localStorage when app loads for theme
    if (savedTheme === "dark"){
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme")
    }
  }, [])

  // toggle theme light/dark
  const toggleTheme = () => {
    if (!isDarkTheme) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    }
  };
  
  // adds movie to cart
  function addToCart(movie){
    const dupeItem = cart.find(item => item.imdbID === movie.imdbID);

    if (dupeItem) { // update quantity here
      // dupeItem.quantity += 1;
      setCart(cart.map(item => 
        item.imdbID === dupeItem.imdbID ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else { // add new item
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  }

  // changes quantity
  function changeQuantity(movie, quantity){
    setCart(cart.map(item => 
      item.imdbID === movie.imdbID ? { ...item, quantity: +quantity } : item
    ));
  }

  // removes item from cart
  function removeItem(item){
    setCart(cart.filter(movie => movie.imdbID !== item.imdbID));
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  },[cart])

  return (
    <Router>
      <div className="App">
        <Nav toggleTheme={toggleTheme} numberOfItems={numberOfItems()}/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:id' element={<MovieInfo addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts' element={<Posts /> } />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
