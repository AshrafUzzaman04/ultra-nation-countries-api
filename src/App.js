import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counties, setCounties] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCounties(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Total counties: {counties.length}</h3>
      <ul>
        {counties.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ul>
      <h1>Hellow Ultra-Nation</h1>
    </div>
  );
}

export default App;
