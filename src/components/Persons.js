import Person from "./Person";

const Persons = ({persons}) => {
    return (
        <div style={{'padding': '5px', 'backgroundColor': '#999'}}>
            {
                persons.map((person, index) => (
                    <Person key={index} person={person}/>
                ))
            }
        </div>
    );
}

export default Persons;