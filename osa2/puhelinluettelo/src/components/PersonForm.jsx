const PersonForm = ({onSubmit,newName,newNumber,onNameChange,onNumChange}) => (
    <form onSubmit={onSubmit}>
        <div>
          name: <input value = {newName} onChange={onNameChange} />
           
        </div>
        <div>
          number: <input value = {newNumber} onChange={onNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm