import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCounties] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  // fetch the country
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // const allData = data);
        setCounties(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // event handlers for country
  const handleAddCountry = (country) => {
    const newselectedCountry = [...selectedCountry, country];
    setSelectedCountry(newselectedCountry);
  };

  return (
    <div className="main_container">
      {/* ///////////////////////////////////// */}
      {/* cart component  */}
      {/* ///////////////////////////////////// */}
      <Cart
        key={countries.map((country) => country.ccn3)}
        countries={countries}
        selectedCountry={selectedCountry}
      ></Cart>
      ;
      <div className="countries_cart">
        {/* ///////////////////////////////////// */}
        {/* map the country component */}
        {/* ///////////////////////////////////// */}
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            handleAddCountry={handleAddCountry}
            countrydata={country}
          ></Country>
        ))}
      </div>
    </div>
  );
}

export default App;
