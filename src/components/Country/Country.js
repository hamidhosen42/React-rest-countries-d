import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Countries from "../Countries/Countries";

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
      {countries.map((country) => (
        <Countries
          population={country.population}
          name={country.name}
          flags={country.flags}
        ></Countries>
      ))}
    </div>
  );
};

export default Country;