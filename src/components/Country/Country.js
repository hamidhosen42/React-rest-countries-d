import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Countries from "../Countries/Countries";
import './Country.css';


const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>HELLO From Countries : {countries.length}</h1>

      <div className="countries-container">
        {countries.map((country) => (
          <Countries
            country={country}
            key={country.cca3}
            //   population={country.population}
            //   name={country.name}
            //   flags={country.flags}
            //   area={country.area}
            //   region={country.region}
          ></Countries>
        ))}
      </div>
    </div>
  );
};

export default Country;