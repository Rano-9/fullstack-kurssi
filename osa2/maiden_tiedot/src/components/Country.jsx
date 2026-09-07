const Country = ({country}) => {
    return (
        <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h1>Languages</h1>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={country.flag.alt}></img>
        </div>
    )
}
export default Country