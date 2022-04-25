import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import ItemQuantity from './Quantity';

const {currentQuantity, desiredQuantity} = dummyVariables;

describe('renders quantity group with dummy data in static mode', () => {
    test('smoke test', () => {
        render(<ItemQuantity editMode={false} currentQuantity={currentQuantity} desiredQuantity={desiredQuantity} />);
        expect(screen.getByText(`${currentQuantity} / ${desiredQuantity}`)).toBeInTheDocument();
    })
});

// renders in edit mode with valid input fields
describe('renders quantity group with dummy data in edit mode', () => {
    test('smoke test', () => {
        render(<ItemQuantity editMode currentQuantity={currentQuantity} desiredQuantity={desiredQuantity} />);
        expect(screen.getByDisplayValue(currentQuantity)).toBeInTheDocument();
        expect(screen.getByDisplayValue(desiredQuantity)).toBeInTheDocument();
    })
});