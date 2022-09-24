import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Header from "./components/Header/Header";
import Person from "./components/Person/Person";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      <Header></Header>
      <Country></Country>
      <Person></Person>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <h1>Visiting Every country of the world!!!</h1>
//       <h3>Available Countries : {countries.length}</h3>

//       {countries.map((country) => (
//         <Country population={country.population} name={country.name} flags={country.flags}></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>{props.name.common}</h2>
//       <h4>Population:{props.population}</h4>
//       <img src={props.flags.png} alt="" srcset="" />
//     </div>
//   );
// }

//! https://restcountries.com/v3.1/all
export default App;