import { render, screen } from '@testing-library/react';
import ItemSlug from '.';

it('renders item slug with dummy name and brands', () => {
    render(<ItemSlug itemName='Pasta' brands={['fusili', 'penne', 'spaghetti']}/>);
    expect(screen.getByText("Pasta")).toBeInTheDocument();
    expect(screen.getByText("fusili")).toBeInTheDocument();
    expect(screen.getByText("penne")).toBeInTheDocument();
    expect(screen.getByText("spaghetti")).toBeInTheDocument();
  });
