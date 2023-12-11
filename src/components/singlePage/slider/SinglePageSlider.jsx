import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { popular } from "../../../dummyData";
import { Link } from "react-router-dom";
import "./style.css";
import {
  getPolitics,
  getBusiness,
  getEntertainment,
  getEconomics,
  getLifestyle,
  getTechnoloy,
} from "../../../Routes/getrequest";
import { BASE_URL } from "../../../Domain";
// same code of popular and change some part
const SinglePageSlider = () => {
  const [data, setdata] = useState([]);
  const [random, setrandomdata] = useState([]);
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
  //change
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="singlePopular">
        <div className="content">
          <Slider {...settings}>
            {random.map((val) => {
              return (
                <div className="items">
                  <div className="box">
                    <div className="images">
                      <img src={`${BASE_URL}${val?.cover}`} alt="" />
                    </div>
                    <div className="text">
                      <Link
                        to={`/SinglePage/1`}
                        state={val}
                        style={{ color: "#fff" }}
                      >
                        <h1 className="title">{val.title.slice(0, 30)}...</h1>
                      </Link>
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

export default SinglePageSlider;
