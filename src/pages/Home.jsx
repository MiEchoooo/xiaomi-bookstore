import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Slider from "../components/Slider";
import BestSelling from "../components/BestSelling";
import Store from "../components/Store";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Slider />
      <Services />
      <BestSelling />
      <Store />
      <Footer />
    </>
  );
}

export default Home;
