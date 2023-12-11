import React from "react";
import "./Popular.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import { BASE_URL } from "../../../../Domain";
import { Link } from "react-router-dom";
const Popular = ({ Data, catgeory }) => {
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
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 6,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  // console.log(Data, catgeory);

  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {Data.map((val, id) => {
              const date = new Date(val.created_at);
              return (
                <Link to="/singlepage/1" state={val}>
                  <div className="items" key={id}>
                    <div className="box shadow">
                      <div className="images row">
                        <div className="img">
                          <img src={`${BASE_URL}${val.cover}`} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{catgeory}</span>
                        </div>
                      </div>
                      <div className="text row">
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{`${date.getDate()}-${
                            month[date.getMonth()]
                          }-${date.getFullYear()}`}</label>
                        </div>
                        {/* <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>{val.comments}</label>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
