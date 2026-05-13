import { BrowserRouter as Router, Routes, Route } from "react-router";
import './style.css';
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Landing></Landing>
        <Highlights></Highlights>
      </div>
    </Router>
  );
}

export default App;
