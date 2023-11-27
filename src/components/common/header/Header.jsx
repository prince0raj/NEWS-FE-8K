import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/politics">Politics</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/economic">Economic</Link>
              </li>
              <li>
                <Link to="/lifestyle">Lifestyle</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
            <div
              className="cut-btn"
              style={!navbar ? { display: "none" } : { display: "flex" }}
              onClick={() => setNavbar(!navbar)}
            >
              <ImCross />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
