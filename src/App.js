import React, { useState } from "react";
import FlightSearch from "./components/FlightSearch";
import FlightList from "./components/FlightList";
import "./App.css";
import { fetchData } from "./utils/api";
import { useEffect } from "react";
import { envVar } from "./utils/envVars";
import { sampleFlightsData, sampleAirportsData } from "./data/sample";
const isSampleDataUsed = envVar("USE_SAMPLE_DATA") === true;

const App = () => {
  const [flights, setFlights] = useState([]);
  const [airPorts, setAirports] = useState([]);

  function setSampleData() {
    setAirports(sampleAirportsData);
    setFlights(sampleFlightsData);
  }

  const searchFlights = async (searchParams) => {
    if (isSampleDataUsed) {
      setFlights(sampleFlightsData);
    } else {
      const response = await fetchData(
        "flights/searchFlightsWebComplete",
        envVar("RAPID_API_VERSION_2"),
        searchParams
      );

      if (response.status) {
        setFlights(response.data);
      }
    }
  };

  const getAirports = async () => {
    const params = {
      query: "new Miami",
      locale: envVar("RAPID_API_MARKET"),
    };
    const response = await fetchData(
      "flights/searchAirport",
      envVar("RAPID_API_VERSION_1"),
      params
    );
    console.log("response.data", response.data);
    setAirports(response.data);
  };

  useEffect(() => {
    if (isSampleDataUsed) {
      setSampleData();
    } else {
      getAirports();
    }
  }, []);

  return (
    <div className='App'>
      <h1>Google Flights Search</h1>
      <FlightSearch onSearch={searchFlights} airPorts={airPorts} />
      <FlightList flights={flights} />
    </div>
  );
};

export default App;
