import React from "react";
import Benefits from "./components/benefits";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Experts from "./components/experts";
import Blogs from "./components/blogs";
import PriceTable from "./components/priceTable";
import Testimonials from "./components/testimonials";
import BottomCTA from "./components/bottomCTA";

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Features />

      <Benefits />

      <Experts />

      <Blogs />

      <PriceTable />

      <Testimonials />

      <BottomCTA />

      <Footer />
    </div>
  );
}

export default App;
