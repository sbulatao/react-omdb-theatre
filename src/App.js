import { BrowserRouter as Router } from "react-router";
import './style.css';
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Landing></Landing>
        <Highlights></Highlights>
        <Featured></Featured>
        <Explore></Explore>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
