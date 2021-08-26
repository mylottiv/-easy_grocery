import { render, screen } from '@testing-library/react';
import ItemMenu from './ItemMenu';

it('renders item menu passed dummy category', () => {
    render(<ItemMenu category='Pasta'/>);
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("10 / 42")).toBeInTheDocument();
});

// Don't Froget to write Click Tests!