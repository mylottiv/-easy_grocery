import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import Price from './Price';

const {price} = dummyVariables;

describe('renders price field not in edit mode', () => {
    test('smoke test', () => {
        render(<Price editMode={false} priceString={price} />);
        expect(screen.getByText('$')).toBeInTheDocument();
        expect(screen.getByText(price)).toBeInTheDocument();
    })
});

// renders in edit mode with valid input fields
describe('renders price field in edit mode', () => {
    test('smoke test', () => {
        render(<Price editMode priceString={price} />);
        expect(screen.getByText('$')).toBeInTheDocument();
        expect(screen.getByDisplayValue(price)).toBeInTheDocument();
    })
});