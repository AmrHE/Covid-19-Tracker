import React, { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2,
            
          }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);



  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
      {/* Title + Select Input dropdown field */}
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
          <MenuItem value="worldwide" >Worldwide</MenuItem>
          {countries.map(country => (
              <MenuItem key={country.name} Value={country.value}>{country.name}</MenuItem>
          ))}
          </Select>
        </FormControl>
      </div>
      
      
      {/* Cases Boxes */}
      {/* Recovered Boxes */}
      {/* Deaths Boxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}

    </div>
  );
}

export default App;
