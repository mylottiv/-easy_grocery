import { render, screen } from '@testing-library/react';
import ItemPanel from './ItemPanel';
import dummyItems from '../../dummyItems';

it('renders item panel for inventory view with dummy name and brands', () => {
    render(<ItemPanel currentCategory='Pantry' categories={Object.keys(dummyItems)} onChange={jest.fn()} items={dummyItems.Pantry}/>);
    expect(screen.getByText("Pantry")).toBeInTheDocument();
    expect(screen.getByText("Fresh")).toBeInTheDocument();
    expect(screen.getByText("Frozen")).toBeInTheDocument();
    expect(screen.getByText("Cleaning")).toBeInTheDocument();
  });

it('renders item panel for shopping view with dummy name and brands', () => {
    render(<ItemPanel currentCategory='Shopping' categories={Object.keys(dummyItems)} onChange={jest.fn()} items={dummyItems.Shopping} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });