import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, area, languages, region, flags, population } =
    props.countrydata;
  const handleAddCountry = props.handleAddCountry;

  return (
    <div className="element_country">
      <h2 style={{ color: "blue" }}>Country: {name?.common}</h2>
      <div>
        <img
          src={flags?.png}
          alt=""
          style={{ width: "200px", height: "100px" }}
        />
      </div>
      <h3>Capital: {capital}</h3>
      <h3 style={{ color: "green" }}>Population: {population}</h3>
      <h4>Area: {area}</h4>
      <h5>
        Languages:{"  "}
        {languages ? Object.values(languages).join(", ") : "No Language Found"}
      </h5>
      <h6>Region: {region}</h6>
      <button onClick={() => handleAddCountry(props.countrydata)}>
        Add to Top
      </button>
    </div>
  );
};

export default Country;
