import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app component', () => {
  render(<App />);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
});
