import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import InfoBox from './InfoBox';
import LineGraph from './LineGraph';
import Table from './Table';
import { prettyPrintStat, sortData } from './util';
import numeral from 'numeral';
import Map from './Map';
import "leaflet/dist/leaflet.css";

function App() {
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat:34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3);


  //Fetch the worlwide Data
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])


  //Fetch the countries list
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));


        let sortedData = sortData(data);
        setCountries(countries);
        setTableData(sortedData);
        setMapCountries(data);
      });
    };
    getCountriesData();
  }, []);


  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    
    const url = countryCode === 'worldwide' ? 
    'https://disease.sh/v3/covid-19/all' : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      //All the data we got of a single country from the API response
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    });
  };


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select 
              variant="outlined" 
              value={country}
              onChange={onCountryChange} 
            >
            <MenuItem value="worldwide" >Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
            ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox 
            onClick={(e) => setCasesType('cases')}
            title="Coronavirus Cases" 
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)} 
            total={numeral(countryInfo.cases).format("0.0a")} 
          />
          <InfoBox 
            onClick={(e) => setCasesType('recovered')}
            title="Recovered" 
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)} 
            total={numeral(countryInfo.recovered).format("0.0a")} 
          />
          <InfoBox 
            onClick={(e) => setCasesType('deaths')}
            isRed
            active={casesType === "deaths"}
            title="Deaths" 
            cases={prettyPrintStat(countryInfo.todayDeaths)} 
            total={numeral(countryInfo.deaths).format("0.0a")} 
          />
        </div>

        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
