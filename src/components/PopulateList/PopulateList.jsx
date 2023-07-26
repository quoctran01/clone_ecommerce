import React from "react";
import Populate from "../Populate/Populate";

const PopulateList = ({ populate }) => {
  return (
    <>
      <ul>
        {populate.map((data, index) => (
          <Populate data={data} key={index} />
        ))}
      </ul>
    </>
  );
};

export default PopulateList;
