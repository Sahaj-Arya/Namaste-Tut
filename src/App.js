import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Body from "./componets/Body";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *     - RestaurantCard
 *        - Image
 *        - Name of rest ,rating ,cuisine etc
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
