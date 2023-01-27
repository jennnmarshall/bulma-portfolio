import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        {/* <Route exact path="/saved" element={<LikedPost />} />
        <Route exact path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
