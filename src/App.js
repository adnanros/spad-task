import { useState } from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
import AddPersonButton from './components/AddPersonButton';
import ClosePersonButton from './components/ClosePersonButton';
import CheckList from './components/CheckList';
import Persons from './components/Persons';
import SearchBox from './components/SearchBox';
import SelectAll from './components/SelectAll';

function App() {
  const [persons, setPersons] = useState([
    {
      id: '4988988832',
      name: 'Bill',
      familyName: 'Gates',
      birthDate: '1960/09/01',
      selected: false,
      confirmed: false,
    },
    {
      id: '4988988833',
      name: 'Jim',
      familyName: 'Carry',
      birthDate: '1965/09/01',
      selected: false,
      confirmed: false,
    },
    {
      id: '4988988834',
      name: 'John',
      familyName: 'Stovart',
      birthDate: '1970/09/01',
      selected: false,
      confirmed: false,
    }
  ]);

  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [showAddPerson, setShowAddPerson] = useState(false);
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

  return (
    <div className="App">
      <div className='container'>
        <div className="main-box">
          <SearchBox filterBySearch={filterBySearch} />
          <SelectAll onSelectAll={onSelectAll} selectAll={selectAll} />
          {!showBySearch &&
            <Persons persons={persons} onCheck={onCheck} onSelect={onSelect} />}
          {showBySearch &&
            <Persons persons={filteredPersons} onCheck={onCheck} onSelect={onSelect} />}
          {showAddPerson &&
            <AddPerson onSubmitAddPerson={onSubmitAddPerson} />}
          {!showAddPerson ? <AddPersonButton onAddPerson={onAddPerson} /> : <ClosePersonButton onAddPerson={onAddPerson} />}
          {showChecklist &&
            <CheckList personToCheckOut={personToCheckOut} onCheckSubmit={onCheckSubmit} onCheckToggler={onCheckToggler} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
