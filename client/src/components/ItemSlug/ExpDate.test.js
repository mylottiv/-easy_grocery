import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import ExpDate from './ExpDate';

const {expirationDateStatic, expirationDateEdit} = dummyVariables;

describe('renders expiration date field w/dummy data in static mode', () => {
    test('smoke test', () => {
        render(<ExpDate editMode={false} dateString={expirationDateStatic} />);
        expect(screen.getByText(expirationDateStatic)).toBeInTheDocument();
    })
});

// renders in edit mode with valid input fields
describe('renders expiration date field w/dummy data in edit mode', () => {
    test('smoke test', () => {
        render(<ExpDate editMode dateString={expirationDateEdit} />);
        expect(screen.getByDisplayValue(expirationDateEdit)).toBeInTheDocument();
    })
});