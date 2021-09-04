import { render, screen } from '@testing-library/react';
import TagGroup from './TagGroup';


it('renders tag group not in edit mode', () => {
    render(<TagGroup editMode={false} />);
    expect(screen.getByText("My Tag")).toBeInTheDocument();
    expect(screen.getByText("Tag 2")).toBeInTheDocument();
    expect(screen.getByText("Tag 3")).toBeInTheDocument();
});

// renders in edit mode with valid input field