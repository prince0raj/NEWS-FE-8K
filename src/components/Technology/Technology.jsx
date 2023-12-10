import React from "react";
import Homes from "../common/mainContent/homes/Home";
import { getTechnoloy } from "../../Routes/getrequest";
import { useState, useEffect } from "react";

const Technology = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getTechnoloy((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Homes Data={state} catgeory="Technology" />
    </div>
  );
};

export default Technology;
