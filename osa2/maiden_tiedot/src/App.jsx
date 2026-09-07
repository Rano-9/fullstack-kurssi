import { useState, useEffect } from 'react'
import countryService from "./services/country"
import Search from "./components/Search"
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)
  const [shownCountries, setShownCountries] = useState(null)

  useEffect( () => {
    countryService.getAll()
      .then(allCountries => {
        setCountries(allCountries) 
        setShownCountries(allCountries)})
    console.log("Fetched countries")
  },[])

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onSearch = (event) => {
    const newSearchValue = event.target.value
    setSearchValue(newSearchValue)
    const searchedCountries = countries.filter(country => country.name.common.toLowerCase().includes(newSearchValue.toLowerCase()))
    setShownCountries(searchedCountries)
  }
  const showCountry = country => {
    setShownCountries([country])
  }

  return (
    <div>
      <Search onSearch={onSearch} value = {searchValue}/>
      {shownCountries ? 
        shownCountries.length === 1 ? 
          <Country country={shownCountries[0]} /> 
          : 
          <Countries countries= {shownCountries} onClick = {showCountry}/> 
      : null}
    </div>
  )
}

export default App