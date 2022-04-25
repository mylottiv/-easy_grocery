import { render, screen } from '@testing-library/react';
import TagGroup from './TagGroup';

describe('renders tag group in static mode', () => {
    test('smoke test', () => {
        render(<TagGroup editMode={false} />);
        expect(screen.getByText("My Tag")).toBeInTheDocument();
        expect(screen.getByText("Tag 2")).toBeInTheDocument();
        expect(screen.getByText("Tag 3")).toBeInTheDocument();
    })
});

// renders in edit mode with valid input field
describe('renders tag group in edit mode', () => {
    test('smoke test', () => {
        render(<TagGroup editMode />);
        expect(screen.getByText("My Tag")).toBeInTheDocument();
        expect(screen.getByText("Tag 2")).toBeInTheDocument();
        expect(screen.getByText("Tag 3")).toBeInTheDocument();
        expect(screen.getByText('Add Tag')).toBeInTheDocument();
    })
});