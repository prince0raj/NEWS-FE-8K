import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";
import Business from "./components/Business/Business";
import Entertainment from "./components/Entertainment/Entertainment";
import Politics from "./components/Politics/Politics";
import LifeStyle from "./components/Lifestyles/LifeStyle";
import Economic from "./components/Economics/Economic";
import Technology from "./components/Technology/Technology";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepages />} />
          <Route path="/singlepage/:id" exact element={<SinglePage />} />
          <Route exact path="/business" element={<Business />} />
          <Route exact path="/economic" element={<Economic />} />
          <Route exact path="/technology" element={<Technology />} />
          <Route exact path="/politics" element={<Politics />} />
          <Route exact path="/lifeStyle" element={<LifeStyle />} />
          <Route exact path="/entertainment" element={<Entertainment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
