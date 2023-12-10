import React from "react";
import Homes from "../common/mainContent/homes/Home";
import { getPolitics } from "../../Routes/getrequest";
import { useState, useEffect } from "react";

const Politics = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getPolitics((err, res) => {
      if (err) {
        console.log("data can't get fetched");
      } else {
        setstate(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Homes Data={state} catgeory="Politics" />
    </div>
  );
};

export default Politics;
