import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Propos from "../pages/Propos";
import Appartements from "../pages/Appartements";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Propos" element={<Propos />} />
        <Route path="/Appartements" element={<Appartements />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
