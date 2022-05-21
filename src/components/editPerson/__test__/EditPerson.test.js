import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

describe('rendering of all the elements in the Edit Person form', ()=>{

  it('renders search button', () => {
    render(<App />);

    const notShownInputElement = screen.queryByTestId(/edit-input-name/i);
    expect(notShownInputElement).not.toBeInTheDocument();

    const editButtonElement = screen.getByTestId(/edit-icon-4988988832/i);
    fireEvent.click(editButtonElement);
    
    const shownInputElement = screen.queryByTestId(/edit-input-name/i);
    expect(shownInputElement).toBeInTheDocument();
  });
  
  it('edits a person name', () => {
    render(<App />);

    const editButtonElement = screen.getByTestId(/edit-icon-4988988832/i);
    fireEvent.click(editButtonElement);
    
    const editInputElement = screen.queryByTestId(/edit-input-name/i);
    fireEvent.change(editInputElement, {target: {value: 'new-name'}});
    const confirmButton = screen.getByTestId('edit-confirm-button');
    fireEvent.click(confirmButton);

    const personWithNewName = screen.getByText('new-name')
    expect(personWithNewName).toBeInTheDocument();
  });
 
})