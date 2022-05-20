import { render, screen } from '@testing-library/react';
import App from './App';

describe('render App main page display', ()=>{

  it('renders search button', () => {
    render(<App />);
    const buttonElement = screen.getByTestId(/search-button/i);
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('renders search input', () => {
    render(<App />);
    const buttonElement = screen.getByPlaceholderText("Search for some one");
    expect(buttonElement).toBeInTheDocument();
  });
 
})