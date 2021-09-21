import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import Price from './Price';

const {price} = dummyVariables;

it('renders price field not in edit mode', () => {
    render(<Price editMode={false} priceString={price} />);
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText(`${price}`)).toBeInTheDocument();
});

// renders in edit mode with valid input fields