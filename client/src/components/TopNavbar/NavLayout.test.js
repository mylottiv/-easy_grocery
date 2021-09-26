import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routerRender from '../../testingUtils/routerRender';
import NavLayout from './NavLayout';

it('renders top navbar component visible on mobile (not logged in)', () => {
  routerRender(<NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    />);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});

it('renders top navbar component visible on mobile (logged in)', () => {
  routerRender(<NavLayout 
    loggedIn
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    />);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Shopping")).toBeInTheDocument();
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("Logout")).toBeInTheDocument();
});

it('Burger Button click fires passed function', () => {
  const burgerMock = jest.fn()
  routerRender(<NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={burgerMock}
    dropdownOnClick={jest.fn()}
    />);
  userEvent.click(screen.getByTestId('burger-button'));
  expect(burgerMock).toHaveBeenCalledTimes(1);
})