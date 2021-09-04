import { render, screen } from '@testing-library/react';
import ItemPanel from './ItemPanel';

it('renders item panel for inventory view with dummy name and brands', () => {
    render(<ItemPanel viewType='Inventory' />);
    expect(screen.getByText("Pantry")).toBeInTheDocument();
    expect(screen.getByText("Fresh")).toBeInTheDocument();
    expect(screen.getByText("Frozen")).toBeInTheDocument();
    expect(screen.getByText("Cleaning")).toBeInTheDocument();
  });

it('renders item panel for shopping view with dummy name and brands', () => {
    render(<ItemPanel viewType='Shopping' />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });
