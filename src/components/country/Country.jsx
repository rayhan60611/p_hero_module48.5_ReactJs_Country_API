// import React from "react";
import PropTypes from "prop-types";

const Country = (props) => {
  const { region, area, name, flags, population } = props.country;
  return (
    <div className="card">
      <img className="card-img-top" height={"100%"} src={flags.svg} alt="" />
      <div className="card-body text-start">
        <h4 className="text-danger">Country: {name.common}</h4>
        <h4 className="text-primary">Region: {region}</h4>
        <h5 className="text-info">Population: {population} Crore</h5>
        <h5 className="text-success">
          Area: {area} Km<sup>2</sup>
        </h5>
      </div>
    </div>
  );
};

// An object with warnings on extra properties
Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
