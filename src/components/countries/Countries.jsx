import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //fetching data from rest api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Total Countries : </h2>
    </div>
  );
};

export default Countries;
