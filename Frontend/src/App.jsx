import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Slider from "./pages/swiper";
// import { useState } from "react";

function App() {
  return (
    <>
      <NavBar />

      {/* Your Content/Components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/swipe" element={<Slider />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
