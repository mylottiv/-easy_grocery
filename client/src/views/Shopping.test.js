import { render, screen } from '@testing-library/react';
import Shopping from './Shopping';

it('renders inventory page panel component & dummy items', () => {
  render(<Shopping />);
  expect(screen.getByText("Shopping List")).toBeInTheDocument();
  expect(screen.getByText("Items")).toBeInTheDocument();
});