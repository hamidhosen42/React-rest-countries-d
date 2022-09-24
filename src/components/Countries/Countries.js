import React from "react";

const Countries = (props) => {
  return (
    <div>
      <h2>{props.name.common}</h2>
      <h4>Population:{props.population}</h4>
      <img src={props.flags.png} alt="" srcset="" />
    </div>
  );
};

export default Countries;