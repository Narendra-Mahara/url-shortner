import React from "react";
import { useParams } from "react-router";

const Redirect = () => {
  let { shortID } = useParams();
  console.log(shortID);

  return (
    <div>
      
    </div>
  );
};

export default Redirect;
