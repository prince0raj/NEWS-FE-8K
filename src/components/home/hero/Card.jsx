import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Domain";
const Card = ({
  item: { id, cover, title, author_name, created_at },
  catgeory,
}) => {
  const date = new Date(created_at);
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
      <div className="box">
        <div className="img">
          <img src={`${BASE_URL}${cover}`} alt="" />
        </div>
        <div className="text">
          <span className="category">{catgeory}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/SinglePage/${id}`}>
            <h1 className="titleBg">{title}</h1>
          </Link>
          <div className="author flex">
            <span>by {author_name}</span>
            <span>{`${date.getDate()}-${
              month[date.getMonth()]
            }-${date.getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
