import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
// import { gallery } from "../../../../dummyData";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";
import { tpost } from "../../../../dummyData";
import { todaypost } from "../../../../dummyData";
//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)
import { getGallary, TodayPost } from "../../../../Routes/getrequest";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../../../Domain";
const Side = () => {
  const [gallery, setGalary] = useState([]);
  const [TodayPostdata, setTodayPost] = useState([]);
  useEffect(() => {
    getGallary((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setGalary(res.data);
      }
    });
    TodayPost((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setTodayPost(res.data);
      }
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const catgeory = [
    "Entertainment",
    "Politics",
    "Business",
    "Economic",
    "Lifestyle",
    "Technology",
  ];
  return (
    <>
      {/* <Heading title="Stay Connected" /> */}
      {/* <SocialMedia /> */}

      {/* <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section> */}

      <Tpost tpost={TodayPostdata} tittle="Recent Post" />
      {/* <Tpost tpost={todaypost} tittle="Todays News" /> */}

      <section className="catgorys">
        <Heading title="Catgeorys" />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val, id) => {
            return (
              <div className="img" key={id}>
                <img src={`${BASE_URL}${val?.Img}`} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
