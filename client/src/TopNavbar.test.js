import { render, screen } from '@testing-library/react';
import TopNavbar from './TopNavbar';

it('renders top navbar component visible on mobile (brand)', () => {
  render(<TopNavbar />);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});

it('renders navbar menu', () => {
  render(<TopNavbar />);
  expect(screen.getByText("Vel quam")).toBeInTheDocument();
  expect(screen.getByText("elementum pulvinar")).toBeInTheDocument();
  expect(screen.getByText("etiam non quam")).toBeInTheDocument();
});

// Click event tests will make much more sense once component is modularized
// Also might be able to explicitly control the active variables etc
// it('triggers mock function on hamburger menu click', () => {
//   render(<TopNavbar />);
//   const mockOnClick = jest.fn()
//   userEvent.click(screen.getByTestId('burger-button'));
//   expect(mockOnClick).toHaveBeenCalledTimes(1);
// })

// it('triggers mock function on navbar dropdown menu click', () => {
//   render(<TopNavbar />);
//   const mockOnClick = jest.fn()
//   userEvent.click(screen.getByTestId('navbar-dropdown-button'));
//   expect(mockOnClick).toHaveBeenCalledTimes(1);
// })