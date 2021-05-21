import { render, screen } from '@testing-library/react';
import TopNavbar from './TopNavbar';

it('renders top navbar component', () => {
  render(<TopNavbar />);
  expect(screen.getByText("EZ-Grocery")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
});
