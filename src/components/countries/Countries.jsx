import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //fetching data from rest api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-danger mb-5 fs-1 ">
        Total Countries : {countries.length}
      </h2>
      <div className="container">
        {countries.map((country) => {
          return <Country key={country.cca3} country={country}></Country>;
        })}
      </div>
    </div>
  );
};

export default Countries;
