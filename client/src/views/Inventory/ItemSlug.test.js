import { render, screen } from '@testing-library/react';
import ItemSlug from './ItemSlug';
import dummyData from '../../dummyItems'

const {variables} = dummyData;

it('renders item slug for inventory view passed dummy name and category', () => {
    render(<ItemSlug itemName='Fusili' properties={{...variables, category: 'Pasta'}} listType='Inventory' />);
    expect(screen.getByText("Fusili")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("On List")).toBeInTheDocument();
});

it('renders item slug for shopping view passed dummy name and category', () => {
    render(<ItemSlug itemName='Fusili' properties={{...variables, category: 'Pasta'}} listType='Shopping' />);
    expect(screen.getByText("Fusili")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Got")).toBeInTheDocument();
});
