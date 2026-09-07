import Country from "./Country"

const Countries = ({countries, onClick}) => {
    if (countries)
        if (countries.length <= 10) {
            return countries.map( country => <p key={country.name.common}>{country.name.common}<button onClick={() => onClick(country)}>Show</button></p>)
        }
        return <p>Too many matches, specify another filter</p>
    return null
}

export default Countries