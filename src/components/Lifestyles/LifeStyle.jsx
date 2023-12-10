import React from "react";
import Homes from "../common/mainContent/homes/Home";
import { getLifestyle } from "../../Routes/getrequest";
import { useState, useEffect } from "react";

const LifeStyle = () => {
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
  return (
    <div>
      <Homes Data={state} catgeory="LifeStyle" />
    </div>
  );
};

export default LifeStyle;
