import { render, screen, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dummyNormalizedItems from '../../dummyNormalizedItems';
import Navbar from './Navbar';

const dummySections = Object.values(dummyNormalizedItems.sections.entities);
const mockOnChange = jest.fn()

describe('renders navbar with dummy values', () => {
    test('smoke & props test', () => {
        render(<Navbar sections={dummySections} selectedSection='All' onChange={mockOnChange} />);
        dummySections.forEach(({name}) => expect(screen.getAllByText(name)[0]).toBeInTheDocument());
    });

    // Might end up lifting this test as part of a functional suite
    test('Triggers onChange mock on click', () => {
        render(<Navbar sections={dummySections} selectedSection='All' onChange={mockOnChange} />);
        dummySections.forEach(({name}) => userEvent.click(screen.getByTitle(name)));
        expect(mockOnChange).toHaveBeenCalledTimes(dummySections.length);
    });
});