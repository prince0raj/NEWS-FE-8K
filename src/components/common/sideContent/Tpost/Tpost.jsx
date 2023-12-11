import React from "react";
import Heading from "../../../common/heading/Heading";
import "./tpost.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../Domain";
const Tpost = ({ tpost, tittle }) => {
  return (
    <>
      <section className="tpost">
        <Heading title={tittle} />
        {tpost?.map((val, ind) => {
          if (ind < 9) {
            return (
              <div className="box flexSB" key={ind}>
                <div className="img">
                  <img src={`${BASE_URL}${val?.cover}`} alt="" />
                </div>
                <div className="text">
                  <Link to={`/SinglePage/1`} state={val}>
                    <h1 className="title">{val.title.slice(0, 35)}...</h1>
                  </Link>
                  <span>a year ago</span>
                </div>
              </div>
            );
          } else {
            return;
          }
        })}
      </section>
    </>
  );
};
export default Tpost;
