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
  expect(screen.getByText("List management")).toBeInTheDocument();
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

it('Dropdown menu click fires passed function', () => {
  const dropdownMock = jest.fn()
  routerRender(<NavLayout 
    loggedIn
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={dropdownMock}
    />);
  userEvent.click(screen.getByTestId('navbar-dropdown-button'));
  expect(dropdownMock).toHaveBeenCalledTimes(1);
})

it('Navigation Links work (not logged in)', () => {
  routerRender(<NavLayout 
    loggedIn={false}
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    />);
  // This link especially shouldn't be handled with a literal
  expect(screen.getByTestId("home-nav-link").href).toBe("http://localhost/");
  expect(screen.getByTestId("login-nav-link").href).toBe("http://localhost/dashboard");
})

it('Navigation Links work (logged in)', () => {
  routerRender(<NavLayout 
    loggedIn
    activeNav={false}
    activeDropdown={false}
    burgerOnClick={jest.fn()}
    dropdownOnClick={jest.fn()}
    />);
  expect(screen.getByTestId("home-nav-link").href).toBe("http://localhost/dashboard");
  expect(screen.getByTestId("inventory-nav-link").href).toBe("http://localhost/inventory");
  expect(screen.getByTestId("shopping-nav-link").href).toBe("http://localhost/shopping");
  expect(screen.getByTestId("profile-nav-link").href).toBe("http://localhost/profile");
  expect(screen.getByTestId("login-nav-link").href).toBe("http://localhost/login");
})