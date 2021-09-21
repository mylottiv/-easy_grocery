import { render, screen, fireEvent } from '@testing-library/react';
import dummyItems from '../../dummyItems';
import Navbar from './Navbar';


const mockOnChange = jest.fn()

it('renders navbar with dummy values', () => {
    render(<Navbar categories={Object.keys(dummyItems)} selectedCategory='Pantry' onChange={mockOnChange} />);
    expect(screen.getByText("Category: Pantry")).toBeInTheDocument();
});

it('renders navbar with dummy values and triggers onChange successfully', () => {
    render(<Navbar categories={Object.keys(dummyItems)} selectedCategory='Pantry' onChange={mockOnChange} />);
    fireEvent.click(screen.getByText("Category: Pantry"))
    fireEvent.click(screen.getByText("Frozen"))
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
