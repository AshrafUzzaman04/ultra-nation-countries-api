import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, area, languages, region, flags } = props.countrydata;
  console.log(props.countrydata);
  console.log(languages);
  return (
    <div className="element_country">
      <h2 style={{ color: "blue" }}>Country: {name.common}</h2>
      <div>
        <img
          src={flags.png}
          alt=""
          style={{ width: "200px", height: "100px" }}
        />
      </div>
      <h3>Capital: {capital}</h3>
      <h4>Area: {area}</h4>
      <h5>
        Languages:
        {/* {Object.values(languages).join(", ")}; */}
      </h5>
      <h6>Region: {region}</h6>
    </div>
  );
};

export default Country;
