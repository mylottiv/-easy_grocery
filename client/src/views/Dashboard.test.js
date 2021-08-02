import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

it('renders landing page hero component', () => {
  render(<Dashboard />);
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Shopping")).toBeInTheDocument();
  expect(screen.getByText("Defacto")).toBeInTheDocument();
});
