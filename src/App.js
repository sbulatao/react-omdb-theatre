import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
      </div>
    </Router>
  );
}

export default App;
