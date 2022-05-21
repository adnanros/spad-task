import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

describe('render Persons and checks whether renders selected before', ()=>{

  it('renders all persons', () => {
    render(<App />);
    const personsDivs = screen.getAllByTestId(/person-div-/i);
    expect(personsDivs.length).toEqual(3);
  });

  it('render selected person at the first', async () => {
    render(<App />);
    const selectedPersonCheckBox = await screen.findByTestId(/person-checkbox-4988988834/i);
    fireEvent.click(selectedPersonCheckBox);
    // console.log(selectedPersonChecBox);


    const personsDivs = screen.getAllByTestId(/person-div-/i);
    const selectedPerson = screen.getByTestId(/person-div-4988988834/i)
    expect(personsDivs[0]).toEqual(selectedPerson);
  });
  
  
})