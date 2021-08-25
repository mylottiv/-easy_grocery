import { render, screen } from '@testing-library/react';
import ItemPanel from '.';

it('renders item panel with dummy name and brands', () => {
    render(<ItemPanel />);
    expect(screen.getByText("Pantry")).toBeInTheDocument();
    expect(screen.getByText("Fresh")).toBeInTheDocument();
    expect(screen.getByText("Frozen")).toBeInTheDocument();
    expect(screen.getByText("Cleaning")).toBeInTheDocument();
  });
