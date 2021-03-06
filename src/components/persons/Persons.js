import Person from "../person/Person";

const Persons = ({persons, onCheck, onSelect, onEditPerson}) => {
    const selectedPersons = persons.map((person, index) => 
    {
        if(person.selected) {
        return(<Person key={index} person={person} onCheck={onCheck}  onSelect= {onSelect} onEditPerson={onEditPerson} />);
        } else { return '';}
    });
    const unselectedPersons = persons.map((person, index) => 
    {
        if(!person.selected) {
        return(<Person key={index} person={person} onCheck={onCheck}  onSelect= {onSelect} onEditPerson={onEditPerson} />);
        } else { return '';}
    });

    return (
        <div className="persons">
            <div>{selectedPersons}</div>
            <div>{unselectedPersons}</div>
        </div>
    );
}

export default Persons;