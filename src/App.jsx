// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/utilites.css";
import "./index.css";
import "./styles/home-css.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
import NavbarState from "./components/NavbarState";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      <NavbarState />
    </>
  );
}

export default App;
