import React from "react";
import Homes from "../common/mainContent/homes/Home";
import { getEntertainment } from "../../Routes/getrequest";
import { useState, useEffect } from "react";

const Entertainment = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getEntertainment((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Homes Data={state} catgeory="Entertainment" />
    </div>
  );
};

export default Entertainment;
