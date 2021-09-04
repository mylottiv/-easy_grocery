import { render, screen } from '@testing-library/react';
import Inventory from './Inventory';

it('renders inventory page panel component & dummy items', () => {
  render(<Inventory />);
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Items")).toBeInTheDocument();
});