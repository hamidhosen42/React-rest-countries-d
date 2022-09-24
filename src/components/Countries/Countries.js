import React from "react";
import "./Countries.css";

const Countries = (props) => {
  // console.log(props.country);
  const {name, population, area, region, flags} = props.country;

  return (
    <div className="country">

      <h2>Country Name : {name.common}</h2>
      <img src={flags.png} alt=""/>
      <h4>Population:{population}</h4>
      <p>Area : {area}</p>
      <p>Region : {region}</p>

      {/* <h2>Country Name : {props.country.name.common}</h2>
      <h4>Population:{props.country.population}</h4>
      <p>Area : {props.country.area}</p>
      <p>Region : {props.country.region}</p>
      <img src={props.country.flags.png} alt="" srcset="" /> */}
    </div>
  );
};

export default Countries;