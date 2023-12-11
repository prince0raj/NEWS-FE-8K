import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer style={{ display: "none" }}>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </p>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +91 60521488</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal wrapperLegal ">
        <div className="containerX">
          <p style={{ textAlign: "center" }}>
            © all rights reserved by Genuien News
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://instagram.com/genuinenews8?igshid=YTQwZjQ0NmI0OA=="
            target="_blank"
            style={{ color: "grey" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/GenuineNews8?t=5bI_9DZJflDBqGxFuJ47xg&s=09"
            target="_blank"
            style={{ color: "grey" }}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
