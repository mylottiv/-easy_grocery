import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dummyItems from '../../dummyItems';
import Navbar from './Navbar';


const mockOnChange = jest.fn()

it('renders navbar with dummy values', () => {
    render(<Navbar categories={Object.keys(dummyItems)} selectedCategory='Pantry' onChange={mockOnChange} />);
    expect(screen.getByText("Category: Pantry")).toBeInTheDocument();
});

it('renders navbar with dummy values and triggers onChange successfully', () => {
    render(<Navbar categories={Object.keys(dummyItems)} selectedCategory='Pantry' onChange={mockOnChange} />);
    userEvent.click(screen.getByText("Category: Pantry"))
    userEvent.click(screen.getByText("Frozen"))
    expect(mockOnChange).toHaveBeenCalledTimes(1);
});
