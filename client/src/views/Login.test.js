import { render, screen } from '@testing-library/react';
import Login from './Login';

it('renders landing page & hero component', () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  expect(screen.getByText("Massa eget egestas")).toBeInTheDocument();
});
