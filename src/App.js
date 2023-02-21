import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [counties, setCounties] = useState([]);
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
    console.log("country added", country);
  };

  return (
    <div className="main_container">
      <h3>Total countries: {counties.length}</h3>
      <h3>Total Added countries: {}</h3>
      <Cart></Cart>
      <div className="countries_cart">
        {/* map the component */}
        {counties.map((country) => (
          <Country
            key={country.ccn3}
            handleAddCountry={handleAddCountry}
            countrydata={country}
          ></Country>
        ))}
      </div>
      <h1>Hellow Ultra-Nation</h1>
    </div>
  );
}

export default App;
