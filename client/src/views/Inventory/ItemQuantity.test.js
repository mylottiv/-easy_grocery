import { render, screen } from '@testing-library/react';
import dummyData from '../../dummyItems'
import ItemQuantity from './ItemQuantity';

const {currentQuantity, desiredQuantity} = dummyData.variables;

it('renders quantity group not in edit mode', () => {
    render(<ItemQuantity editMode={false} currentQuantity={currentQuantity} desiredQuantity={desiredQuantity} />);
    expect(screen.getByText(`${currentQuantity} / ${desiredQuantity}`)).toBeInTheDocument();
});

// renders in edit mode with valid input fields