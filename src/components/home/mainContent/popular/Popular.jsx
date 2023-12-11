import React, { useState, useEffect } from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
import {
  getPolitics,
  getBusiness,
  getEntertainment,
  getEconomics,
  getLifestyle,
  getTechnoloy,
} from "../../../../Routes/getrequest";
import { BASE_URL } from "../../../../Domain";
const Popular = () => {
  const [data, setdata] = useState([]);
  const [random, setrandomdata] = useState([]);
  const shuffleArray = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchFunctions = [
          getBusiness,
          getEconomics,
          getPolitics,
          getEntertainment,
          getLifestyle,
          getTechnoloy,
        ];

        const promises = fetchFunctions.map(
          (fetchFn) =>
            new Promise((resolve, reject) => {
              fetchFn((err, res) => (err ? reject(err) : resolve(res)));
            })
        );
        const responses = await Promise.all(promises);
        const combinedData = responses.reduce(
          (acc, curr) => [...acc, ...curr.data.slice(0, 5)],
          []
        );
        setdata(combinedData);
      } catch (err) {
        console.log("Error Fetching data", err);
      }
    };

    fetchData();
  }, []); // End of the first useEffect

  useEffect(() => {
    const shuffleArray = (data) => {
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      return data;
    };

    // Check if data has been updated before shuffling
    if (data.length > 0) {
      const newdata = shuffleArray([...data]); // Create a copy to avoid modifying the original data
      setrandomdata(newdata);
    }
  }, [data]);
  // console.log(random, "random");
  // console.log(data, "data");

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
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
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {random.map((val) => {
              const date = new Date(val?.created_at);
              return (
                <div className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={`${BASE_URL}${val?.cover}`} alt="" />
                      </div>
                      <div class="category category1">
                        <span>{val?.category}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <Link to={`/SinglePage/1`} state={val}>
                        <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      </Link>
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
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
