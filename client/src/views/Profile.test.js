import { render, screen } from '@testing-library/react';
import Profile from './Profile';

it('renders profile component', () => {
  render(<Profile />);
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("Settings")).toBeInTheDocument();
  expect(screen.getByText("Vivamus")).toBeInTheDocument();
});