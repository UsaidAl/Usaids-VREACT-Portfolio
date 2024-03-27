import React from "react";
import Header from "../components/Header"; //To import header component
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import "../CSS/Home.css"

function Home() {
  return (
    <div>
      <Header /> {/*Header compenent is used here */}
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;