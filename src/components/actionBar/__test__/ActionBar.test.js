import { render, screen } from '@testing-library/react';
import App from '../../../App';

test('renders learn react link', async() => {
  render(<App />);
  const buttonElement = screen.getByTestId(/search-button/i);
  expect(buttonElement).toBeInTheDocument();
});
