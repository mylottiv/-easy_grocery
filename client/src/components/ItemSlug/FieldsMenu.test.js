import { render, screen } from '@testing-library/react';
import FieldsMenu from './FieldsMenu';
import variables from '../../dummyVariables';

it('renders item menu in inventory view passed dummy properties', () => {
    render(<FieldsMenu properties={{...variables, type: 'Pasta'}}  displayType='Inventory' />);
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
});

// Renders shopping item menu

// Don't Froget to write Click Tests for Edit Mode!