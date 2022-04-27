import { render, screen } from '@testing-library/react';
import ItemList from './index';
import onShoppingFilter from '../../helpers/onShoppingFilter';
import dummyNormalizedItems from '../../dummyNormalizedItems';


const dummyItems = Object.values(dummyNormalizedItems.items.entities);
const dummyShoppingItems = onShoppingFilter(dummyItems);
const dummySections = Object.values(dummyNormalizedItems.sections.entities);

// Am thinking this will have to be where the Functional Tests for clicking on the item slugs go?
// Probably just going through from bottom to top and making sure the smokes are all fixed
// Then we do a sweep in combination with redux to start testing and implementing the click features

describe('renders item list for inventory view with dummy data', () => {
  test('smoke test', () => {
    render(<ItemList items={dummyItems} sections={dummySections} type='Inventory' />);
    expect(screen.getByText('Items')).toBeInTheDocument();
  })
});

describe('renders item list for shopping view with dummy data', () => {
  test('smoke test', () => {
    render(<ItemList items={dummyShoppingItems} sections={dummySections} type='Shopping' />);
    expect(screen.getByText('Items')).toBeInTheDocument();
  })
});