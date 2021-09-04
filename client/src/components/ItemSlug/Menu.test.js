import { render, screen } from '@testing-library/react';
import ItemMenu from './Menu';
import dummyData from '../../dummyItems';

const {variables} = dummyData

it('renders item menu in inventory viewpassed dummy properties', () => {
    render(<ItemMenu properties={{...variables, category: 'Pasta'}}  displayType='Inventory' />);
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
});

// Renders shopping item menu

// Don't Froget to write Click Tests for Edit Mode!