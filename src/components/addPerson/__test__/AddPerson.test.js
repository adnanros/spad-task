import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

describe('renders Add-Person component', ()=>{

  it('renders all elements in the form', () => {
    render(<App />);
    const inputElementForName = screen.queryByPlaceholderText("Enter Your First Name");
    expect(inputElementForName).not.toBeInTheDocument();
  });

  it('clicks AddPerson Button and renders AddPerson form', () => {
    render(<App />);
    const addPersonButton = screen.getByTestId(/addPerson-button/i);
    fireEvent.click(addPersonButton);
    const inputElementForName = screen.queryByPlaceholderText("Enter Your First Name");
    expect(inputElementForName).toBeInTheDocument();
    const inputElementForFamily = screen.queryByPlaceholderText("Enter Your Family Name");
    expect(inputElementForFamily).toBeInTheDocument();
    const inputElementForBirthdate = screen.queryByPlaceholderText("Enter Your Birthday");
    expect(inputElementForBirthdate).toBeInTheDocument();
  });

  
  it('adds a new person', () => {
    render(<App />);
    const addPersonButton = screen.getByTestId(/addPerson-button/i);
    fireEvent.click(addPersonButton);

    const inputElementForName = screen.queryByPlaceholderText("Enter Your First Name");
    fireEvent.change(inputElementForName, {target: {value: 'Adnan'}});
    expect(inputElementForName.value).toBe('Adnan');
    

    const submitButton = screen.getByTestId(/add-person-submit/i);
    fireEvent.click(submitButton);

    const newPersonDiv = screen.getByText(/Adnan/i);
    expect(newPersonDiv).toBeInTheDocument();
  });

  it('clicks close-button', () => {
    render(<App />);
    const addPersonButton = screen.getByTestId(/addPerson-button/i);
    fireEvent.click(addPersonButton);

    const inputElementForName = screen.queryByPlaceholderText("Enter Your First Name");
    expect(inputElementForName).toBeInTheDocument();

    const closeButtonElement = screen.getByTestId(/close-button/i);
    fireEvent.click(closeButtonElement);
    expect(inputElementForName).not.toBeInTheDocument();

  });

})