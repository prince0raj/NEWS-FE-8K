import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hero } from "../../dummyData";
import Side from "../home/sideContent/side/Side";
import "../home/mainContent/homes/style.css";
import "./singlepage.css";
import "../home/sideContent/side/side.css";
import SinglePageSlider from "./slider/SinglePageSlider";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../Domain";
const SinglePage = () => {
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // const { id } = useParams();
  let { state } = useLocation();
  const [item, setItem] = useState(null);
  useEffect(() => {
    setItem(state);
  }, [state]);
  const date = new Date(item?.created_at);
  return (
    <>
      {item ? (
        <main>
          <SinglePageSlider />
          <div className="container">
            <section className="mainContent details">
              <h1 className="title">{item?.title}</h1>

              <div className="author">
                <span>by</span>
                <img src={`${BASE_URL}${item?.author_img}`} alt="" />
                <p> {item?.author_name} on</p>
                <label>{`${date.getDate()}-${
                  month[date.getMonth()]
                }-${date.getFullYear()}`}</label>
              </div>

              {/* <div className="social">
                <div className="socBox">
                  <i className="fab fa-facebook-f"></i>
                  <span>SHARE</span>
                </div>
                <div className="socBox">
                  <i className="fab fa-twitter"></i>
                  <span>TWITTER</span>
                </div>
                <div className="socBox">
                  <i className="fab fa-pinterest"></i>
                </div>
                <div className="socBox">
                  <i className="fa fa-envelope"></i>
                </div>
              </div> */}

              <div className="desctop">
                <p>{item?.desc_par1}</p>
                <p>{item?.desc_par2}</p>
              </div>
              <img src={`${BASE_URL}${item?.cover}`} alt="" />
              <p>{item?.desc_par3}</p>
              <div className="descbot">
                <h1>{item?.details_title}</h1>
                <p>{item?.details_par1}</p>
              </div>

              <div className="quote">
                <i className="fa fa-quote-left"></i>
                <p>{item?.details_quote}</p>
              </div>

              <div className="desctop">
                <p>{item?.details_par2}</p>
                <p>{item?.details_par3}</p>
              </div>
            </section>
            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  );
};

export default SinglePage;
