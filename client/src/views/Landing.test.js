import { render, screen } from '@testing-library/react';
import Landing from './Landing';

it('renders landing page & hero component', () => {
  render(<Landing />);
  expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  expect(screen.getByText("consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  expect(screen.getByText("Call To Action")).toBeInTheDocument();
  expect(screen.getByText("Massa eget egestas")).toBeInTheDocument();
});
