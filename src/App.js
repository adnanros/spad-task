import { useState } from 'react';
import './App.css';
import Persons from './components/Persons';
import SearchBox from './components/SearchBox';

function App() {
  const [persons, setPersons] = useState([
    {
      id: '4988988832',
      name: 'Bill',
      familyName: 'Gates',
      birthDate: '1960/09/01'
    },
    {
      id: '4988988833',
      name: 'Jim',
      familyName: 'Carry',
      birthDate: '1965/09/01',
    },
    {
      id: '4988988834',
      name: 'John',
      familyName: 'Stovart',
      birthDate: '1970/09/01'
    }
  ]);

  return (
    <div className="App">
      <div className='container'>
        <div className="main-box">
          <SearchBox />
          <Persons persons={persons} />
        </div>

      </div>
    </div>
  );
}

export default App;
