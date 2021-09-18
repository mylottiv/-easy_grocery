import { render, screen } from '@testing-library/react';
import Login from './Login';

it('renders login placeholder', () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  expect(screen.getByText("Login Button")).toBeInTheDocument();
  expect(screen.getByText("Massa eget egestas")).toBeInTheDocument();
});
