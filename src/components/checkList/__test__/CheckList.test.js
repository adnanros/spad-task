import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

describe('rendering of all the elements in the Edit Person form', ()=>{

  it('renders search button', () => {
    render(<App />);

    const checkedElement = screen.queryByTestId(/check-list-frame/i);
    expect(checkedElement).not.toBeInTheDocument();

    const checkButtonElement = screen.queryAllByTestId(/check-button/i);
    fireEvent.click(checkButtonElement[0]);

    const shownCheckedElement = screen.queryByTestId(/check-list-frame/i);
    expect(shownCheckedElement).toBeInTheDocument();

  });

  it('renders search button', () => {
    render(<App />);

    const unconfirmedTagElement = screen.getByTestId(/confirm-tag-4988988832/i);
    expect(unconfirmedTagElement).toHaveAttribute('style' , "color: red; font-size: 20px;");

    const checkButtonElement = screen.getByTestId(/check-button-4988988832/i);
    fireEvent.click(checkButtonElement);

    const checkListConfirmButton = screen.getByText(/Confirm/i);
    fireEvent.click(checkListConfirmButton);

    const confirmedTagElement = screen.getByTestId(/confirm-tag-4988988832/i);
    // console.log(confirmedTagElement.style);
    expect(confirmedTagElement).toHaveAttribute('style' , "color: green; font-size: 20px;")

  });


  
 
})