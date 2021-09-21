import { render, screen } from '@testing-library/react';
import ItemSlug from '.';
import variables from '../../dummyVariables'

it('renders item slug for inventory view passed dummy name and category', () => {
    render(<ItemSlug itemName='Fusili' properties={{...variables, type: 'Pasta'}} listType='Inventory' />);
    expect(screen.getByText("Fusili")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("On List")).toBeInTheDocument();
});

it('renders item slug for shopping view passed dummy name and category', () => {
    render(<ItemSlug itemName='Fusili' properties={{...variables, type: 'Pasta'}} listType='Shopping' />);
    expect(screen.getByText("Fusili")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Got")).toBeInTheDocument();
});
