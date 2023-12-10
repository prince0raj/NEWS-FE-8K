import React from "react";
import Homes from "../common/mainContent/homes/Home";
import { useState, useEffect } from "react";
import { getEconomics } from "../../Routes/getrequest";
const Economic = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getEconomics((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Homes Data={state} catgeory="Economics" />
    </div>
  );
};

export default Economic;
