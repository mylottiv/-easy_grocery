import { render, screen } from '@testing-library/react';
import Inventory from '.';

it('renders inventory page panel component & dummy items', () => {
  render(<Inventory />);
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Items")).toBeInTheDocument();
  expect(screen.getByText("Pantry")).toBeInTheDocument();
  expect(screen.getByText("Fresh")).toBeInTheDocument();
  expect(screen.getByText("Frozen")).toBeInTheDocument();
  expect(screen.getByText("Cleaning")).toBeInTheDocument();
  expect(screen.getByText("Pasta")).toBeInTheDocument();
});