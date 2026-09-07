const Persons = ({personsToShow, onClick}) => {

    return (
    personsToShow.map(person => 
        <div key={person.id}>
            <p>{person.name} {person.number}</p> 
            <button onClick={ () => onClick(person)}>Delete</button> 
        </div>)
    )
}

export default Persons