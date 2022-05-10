import Person from "./Person";

const Persons = ({persons, onCheck}) => {
    return (
        <div style={{'padding': '5px', 'backgroundColor': '#999', 'marginBottom': '5px'}}>
            {
                persons.map((person, index) => (
                <Person key={index} person={person} onCheck={onCheck}/>
                ))
            }
        </div>
    );
}

export default Persons;