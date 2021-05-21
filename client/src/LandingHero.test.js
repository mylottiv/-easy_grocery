import { render, screen } from '@testing-library/react';
import LandingHero from './LandingHero';

it('renders landing page hero component', () => {
  render(<LandingHero />);
  expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  expect(screen.getByText("consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  expect(screen.getByText("Massa eget egestas")).toBeInTheDocument();
});
