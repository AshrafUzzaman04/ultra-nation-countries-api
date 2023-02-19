import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";

function App() {
  const [counties, setCounties] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // const allData = data);
        setCounties(data);
      });
  }, []);

  return (
    <div className="main_container">
      <h3>Total counties: {counties.length}</h3>
      <div className="countries_cart">
        {counties.map((country) => (
          <Country key={country.ccn3} countrydata={country}></Country>
        ))}
      </div>
      <h1>Hellow Ultra-Nation</h1>
    </div>
  );
}

export default App;
