import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="App">
    <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard/>} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock/>} />
      </Routes>
  
    </div>
  );
}

export default App;
