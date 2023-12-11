import React, { useState, useEffect } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";
import {
  getBusiness,
  getEconomics,
  getEntertainment,
  getLifestyle,
} from "../../../Routes/getrequest";
const Hero = () => {
  const [state, setstate] = useState([]);
  let val = true;
  useEffect(() => {
    // let data = [];
    const fetchData = async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          new Promise((resolve, reject) =>
            getBusiness((err, res) => (err ? reject(err) : resolve(res)))
          ),
          new Promise((resolve, reject) =>
            getEconomics((err, res) => (err ? reject(err) : resolve(res)))
          ),
          new Promise((resolve, reject) =>
            getEntertainment((err, res) => (err ? reject(err) : resolve(res)))
          ),
          new Promise((resolve, reject) =>
            getLifestyle((err, res) => (err ? reject(err) : resolve(res)))
          ),
        ]);
        // console.log(res1);
        setstate([res1.data[0], res2.data[0], res3.data[0], res4.data[0]]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const arr = ["BUSINESS", "ECONOMIC", "ENTERTAINMENT", "LIFESTYLE"];
  return (
    <>
      <section className="hero">
        <div className="container">
          {state.map((item, ind) => {
            return (
              <>
                <Card key={ind} item={item} catgeory={arr[ind]} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
