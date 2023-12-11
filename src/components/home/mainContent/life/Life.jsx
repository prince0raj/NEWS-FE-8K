import React from "react";
import Slider from "react-slick";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import { BASE_URL } from "../../../../Domain";
import { useState, useEffect } from "react";
import { getLifestyle } from "../../../../Routes/getrequest";
import "../Ppost/ppost.css";
//copy ppost code
import { Link } from "react-router-dom";
const Life = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getLifestyle((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
      <section className="popularPost life">
        <Heading title="Life Style" />
        <div className="content">
          <Slider {...settings}>
            {state.map((val, ind) => {
              const date = new Date(val?.created_at);
              return (
                <div className="items" key={ind}>
                  <div className="box shadow">
                    <div className="images">
                      <div className="img">
                        <img src={`${BASE_URL}${val?.cover}`} alt="" />
                      </div>
                      {/* <div class='category category1'>
                        <span></span>
                      </div> */}
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

export default Life;
