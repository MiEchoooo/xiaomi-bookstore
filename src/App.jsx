import { Routes, Route } from "react-router-dom";
import "./styles/utilites.css";
import "./index.css";
import "./styles/home-css.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./components/Store";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
