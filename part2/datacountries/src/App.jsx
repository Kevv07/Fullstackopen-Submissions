import { useState, useEffect } from 'react';
import axios from 'axios';

// "Find" outside of app to fix rendering issue
const Find = ({ filter, handleFilterChange }) => {
  return (
    <div>
      find countries: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

const Show = ({ countries, handleShowCountry }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length === 1) {
    const country = countries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <h2>languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      </div>
    );
  } else {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => handleShowCountry(country.name.common)}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  // Fetch all countries from the API when the component starts
  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data)
      })
      .catch((error) => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  // Update the filtered countries
  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(filtered)
  }, [filter, countries]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };

  const handleShowCountry = (countryName) => {
    setFilter(countryName)
  };

  return (
    <div>
      <Find filter={filter} handleFilterChange={handleFilterChange} />
      <Show countries={filteredCountries} handleShowCountry={handleShowCountry} />
    </div>
  )
}

export default App;
