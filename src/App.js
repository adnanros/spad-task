import { useState } from 'react';
import './App.css';

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
          <div className='mb-3'>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

          {
            persons.map((person, index) => (
              <div key={index} className='d-flex' style={{ 'height': '150px'}}>
                <div className='col-3' style={{ 'backgroundColor': 'red' }}>
                  <img src={require('../src/images/bill-gates.jpg')} style={{ 'width': '100%', 'height': '100%' }} alt='...' />
                </div>
                <div className='col-9' style={{ 'backgroundColor': 'green' }}>
                  {person.name}
                </div>
              </div>
            ))
          }



        </div>

      </div>
    </div>
  );
}

export default App;
