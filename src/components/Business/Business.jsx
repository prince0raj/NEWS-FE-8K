import React from "react";
import Home from "../common/mainContent/homes/Home";
import { useState, useEffect } from "react";
import { getBusiness } from "../../Routes/getrequest";
const Business = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getBusiness((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Home Data={state} catgeory="Business" />
    </div>
  );
};

export default Business;
