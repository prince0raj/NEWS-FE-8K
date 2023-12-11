import React from "react";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { popular } from "../../../../dummyData";
import { Worldnews } from "../../../../Routes/getrequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../Domain";
const Music = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    Worldnews((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  // console.log(state);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
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
  return (
    <>
      <section className="music">
        <Heading title="World News" />
        <div className="content">
          <Slider {...settings}>
            {state.map((val) => {
              const date = new Date(val?.created_at);
              return (
                <div className="items">
                  <div className="box shadow flex-device flexSB">
                    <div className="images">
                      <div className="img">
                        <img src={`${BASE_URL}${val?.cover}`} alt="" />
                      </div>
                      <div class="category category1">
                        <span>{val.cat}</span>
                      </div>
                    </div>
                    <div className="text">
                      <Link to={`/SinglePage/1`} state={val}>
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      </Link>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{`${date.getDate()}-${
                          month[date.getMonth()]
                        }-${date.getFullYear()}`}</label>
                      </div>
                      <p className="desc">{val.desc_par1.slice(0, 250)}...</p>
                      {/* <div className="comment">
                          <i class="fas fa-share"></i>
                          <label>Share / </label>
                          <i class="fas fa-comments"></i>
                          <label>{val.comments}</label>
                        </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
