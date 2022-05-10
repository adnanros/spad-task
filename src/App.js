import { useState } from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
import CheckList from './components/CheckList';
import Persons from './components/Persons';
import SearchBox from './components/SearchBox';

function App() {
  const [persons, setPersons] = useState([
    {
      id: '4988988832',
      name: 'Bill',
      familyName: 'Gates',
      birthDate: '1960/09/01',
      confirmed: false,
    },
    {
      id: '4988988833',
      name: 'Jim',
      familyName: 'Carry',
      birthDate: '1965/09/01',
      confirmed: false,
    },
    {
      id: '4988988834',
      name: 'John',
      familyName: 'Stovart',
      birthDate: '1970/09/01',
      confirmed: false,
    }
  ]);

  const [showAddPerson, setShowAddPerson]= useState(false);
  const [showChecklist, seShowCkeckList] = useState(false);
  const [personToCheckOut, setPersonToCheckOut]= useState({});

  const onAddPerson = ()=> {
    setShowAddPerson(!showAddPerson);
  }

  const onSubmitAddPerson = (person) => {
    person.confirmed = false;
    const newPersons = [...persons, person];
    setPersons(newPersons);
  }

  const onCheck =(person)=>{
    seShowCkeckList(!showChecklist);
    setPersonToCheckOut(person);
  }

  const onCheckSubmit = (id) => {
    const newPersons = persons.map((person)=>(
      person.id !==id ? person : {...person, confirmed: true}
    ));
    setPersons(newPersons);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="main-box">
          <SearchBox />
          <Persons persons={persons} onCheck={onCheck}/>
          {showAddPerson && 
          <AddPerson onSubmitAddPerson={onSubmitAddPerson} />}
          <button className='btn btn-primary' onClick={onAddPerson}>Add Person</button>
          <CheckList personToCheckOut={personToCheckOut} onCheckSubmit={onCheckSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
