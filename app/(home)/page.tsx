import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default page;
