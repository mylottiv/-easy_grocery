import { render, screen } from '@testing-library/react';
import ItemSlug from './ItemSlug';

it('renders item slug passed dummy name and category', () => {
    render(<ItemSlug itemName='Fusili' category='Pasta'/>);
    expect(screen.getByText("Fusili")).toBeInTheDocument();
    expect(screen.getByText("Pasta")).toBeInTheDocument();
  });
