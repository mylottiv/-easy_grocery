import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Need a better long term solution for this
import {BrowserRouter as Router} from 'react-router-dom';
import NavLayout from './NavLayout';

it('renders top navbar component visible on mobile (not logged in)', () => {
  render(<Router><NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    /></Router>);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("List management")).toBeInTheDocument();
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Shopping")).toBeInTheDocument();
});

it('renders top navbar component visible on mobile (logged in)', () => {
  render(<Router><NavLayout 
    loggedIn
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    /></Router>);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("List management")).toBeInTheDocument();
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Shopping")).toBeInTheDocument();
});

// Click event tests will make much more sense once component is modularized
it('triggers mock function on hamburger menu click', () => {
  const burgerMock = jest.fn()
  render(<Router><NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={burgerMock}
    dropdownOnClick={jest.fn()}
    /></Router>);
  userEvent.click(screen.getByTestId('burger-button'));
  expect(burgerMock).toHaveBeenCalledTimes(1);
})

it('triggers mock function on navbar dropdown menu click', () => {
  const dropdownMock = jest.fn()
  render(<Router><NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={dropdownMock}
    /></Router>);
  userEvent.click(screen.getByTestId('navbar-dropdown-button'));
  expect(dropdownMock).toHaveBeenCalledTimes(1);
})