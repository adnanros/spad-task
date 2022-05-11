import { useState } from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
import AddPersonButton from './components/AddPersonButton';
import CheckList from './components/CheckList';
import EditPerson from './components/EditPerson';
import Persons from './components/Persons';
import SearchBox from './components/SearchBox';
import ActionBar from './components/ActionBar';

function App() {
  const [persons, setPersons] = useState([
    {
      id: '4988988832',
      name: 'Bill',
      familyName: 'Gates',
      birthDate: '1955',
      selected: false,
      confirmed: false,
      profileImage: 'gates.jpg',
    },
    {
      id: '4988988833',
      name: 'Jim',
      familyName: 'Carry',
      birthDate: '1962',
      selected: false,
      confirmed: false,
      profileImage: 'carrey.jpg',
    },
    {
      id: '4988988834',
      name: 'Lionel',
      familyName: 'Messi',
      birthDate: '1987',
      selected: false,
      confirmed: false,
      profileImage: 'messi.jpg',
    }
  ]);

  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [showAddPerson, setShowAddPerson] = useState(false);
  const [showEditPerson, setShowEditPerson] = useState(false);
  const [personToBeUpdated, setPersonToBeUpdated]=useState();
  const [showChecklist, setShowCkeckList] = useState(false);
  const [personToCheckOut, setPersonToCheckOut] = useState({});
  const [showBySearch, setShowBySearch] = useState(false);
  const [selectAll, setSelectAll] = useState();

  
const onAddPerson = () => {
    setShowAddPerson(!showAddPerson);
  }
  const onSubmitAddPerson = (person) => {
    person.confirmed = false;
    const newPersons = [...persons, person];
    setPersons(newPersons);
  }

  const onEditPerson = (personToBeUpdated={}) => {
    setPersonToBeUpdated(personToBeUpdated);
    setShowEditPerson(!showEditPerson);
  }

  const onSubmitEditPerson = (updatedPerson) => {
    const newPersons = persons.map((person)=>(
      person.id !== updatedPerson.id ? person : updatedPerson
    ));
    setPersons(newPersons);
    onEditPerson();
  }


  const onCheckToggler = () => {
    setShowCkeckList(!showChecklist);
  }

  const onCheck = (person) => {
    onCheckToggler();
    setPersonToCheckOut(person);
  }

  const onCheckSubmit = (id) => {
    const newPersons = persons.map((person) => (
      person.id !== id ? person : { ...person, confirmed: true }
    ));
    setPersons(newPersons);
  }

  const filterBySearch = (inputText) => {
    const newPersons = persons.filter((person) => {
      if (inputText === '') {
        return person;
      } else if (person.selected === true) {
        return person;
      } else {
        return (person.familyName.toLowerCase().includes(inputText) ||
          person.name.toLowerCase().includes(inputText));
      }
    });
    setFilteredPersons(newPersons);
    setShowBySearch(true);
  }

  const onSelect = (id) => {
    const newPersons = persons.map((person) => (
      person.id !== id ? person : { ...person, selected: !person.selected }
    ));
    setPersons(newPersons);
    setFilteredPersons(newPersons);
  }

  const onSelectAll = (e) => {
    const newPersons = persons.map((person) => ({ ...person, selected: !person.selected }));
    setPersons(newPersons);
    setSelectAll(e.currentTarget.checked);
  }

  const onDelete = ()=> {
    const newPersons = persons.filter((person)=> (person.selected === false));
    setPersons(newPersons);

  }

  return (
    <div className="App">
      <div className='container'>
        <div className="main-box">
          <SearchBox filterBySearch={filterBySearch} />
          <ActionBar onSelectAll={onSelectAll} selectAll={selectAll} onDelete={onDelete} />
          <Persons persons={!showBySearch ? persons : filteredPersons} onCheck={onCheck} onSelect={onSelect} onEditPerson={onEditPerson} />
          {showAddPerson && <AddPerson onSubmitAddPerson={onSubmitAddPerson} onAddPerson={onAddPerson} />}
          <AddPersonButton onAddPerson={onAddPerson} /> 
          {showEditPerson && <EditPerson onSubmitEditPerson= {onSubmitEditPerson} onEditPerson={onEditPerson} personToBeUpdated={personToBeUpdated}/>}
          {showChecklist && <CheckList personToCheckOut={personToCheckOut} onCheckSubmit={onCheckSubmit} onCheckToggler={onCheckToggler} />}
        </div>
      </div>
    </div>
  );
}

export default App;
