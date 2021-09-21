import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import ItemQuantity from './Quantity';

const {currentQuantity, desiredQuantity} = dummyVariables;

it('renders quantity group not in edit mode', () => {
    render(<ItemQuantity editMode={false} currentQuantity={currentQuantity} desiredQuantity={desiredQuantity} />);
    expect(screen.getByText(`${currentQuantity} / ${desiredQuantity}`)).toBeInTheDocument();
});

// renders in edit mode with valid input fields