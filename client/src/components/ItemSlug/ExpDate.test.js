import { render, screen } from '@testing-library/react';
import dummyVariables from '../../dummyVariables'
import ExpDate from './ExpDate';

const {expirationDateStatic, expirationDateEdit} = dummyVariables;

it('renders price field not in edit mode', () => {
    render(<ExpDate editMode={false} staticDateString={expirationDateStatic} editDateString={expirationDateEdit} />);
    expect(screen.getByText(`${expirationDateStatic}`)).toBeInTheDocument();
});

// renders in edit mode with valid input fields