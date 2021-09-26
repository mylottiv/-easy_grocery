import { screen } from '@testing-library/react';
import routerRender from '../testingUtils/routerRender';
import Login from './Login';

it('renders login placeholder', () => {
  routerRender(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  expect(screen.getByText("Login Button")).toBeInTheDocument();
  expect(screen.getByText("Massa eget egestas")).toBeInTheDocument();
});

it('login button routes to dashboard', () => {
  routerRender(<Login />);
  expect(screen.getByText("Login Button").href).toBe('http://localhost/dashboard');
});
