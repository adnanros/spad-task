import Person from "./Person";

const Persons = ({persons, onCheck, onSelect}) => {
    const selectedPersons = persons.map((person, index) => 
    {
        if(person.selected) {
        return(<Person key={index} person={person} onCheck={onCheck}  onSelect= {onSelect} />);
        } else { return '';}
    });
    const unselectedPersons = persons.map((person, index) => 
    {
        if(!person.selected) {
        return(<Person key={index} person={person} onCheck={onCheck}  onSelect= {onSelect} />);
        } else { return '';}
    });

    return (
        <div style={{'padding': '5px', 'backgroundColor': '#F1F1F1', 'marginBottom': '2px'}}>
            <div>{selectedPersons}</div>
            <div>{unselectedPersons}</div>
        </div>
    );
}

export default Persons;