import { render, screen } from '@testing-library/react';
import dummyData from '../../dummyItems'
import Price from './Price';

const {price} = dummyData.variables;

it('renders price field not in edit mode', () => {
    render(<Price editMode={false} priceString={price} />);
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText(`${price}`)).toBeInTheDocument();
});

// renders in edit mode with valid input fields