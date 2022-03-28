import { screen } from '@testing-library/react';
import routerRender from '../testingUtils/routerRender';
import Dashboard from './Dashboard';

it('renders landing page hero component', () => {
  routerRender(<Dashboard />);
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Shopping")).toBeInTheDocument();
});
