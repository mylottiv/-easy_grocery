import { render, screen } from '@testing-library/react';
import ItemSlug from '.';
import dummyNormalizedItems from '../../dummyNormalizedItems';
import processedItemsHelper from '../ItemList/processedItemsHelper';

const testItems = [dummyNormalizedItems.items.entities[0], dummyNormalizedItems.items.entities[1]];
// Hacky fix for me being lazy with the dummy vars
testItems[0].onShoppingList = true;
const inventoryDummyItems = processedItemsHelper(testItems, 'All', 'Inventory')
const shoppingDummyItems = processedItemsHelper(testItems, 'All', 'Shopping')

describe('renders item slug for inventory view with dummy values', () => {
    test.each(inventoryDummyItems)('smoke tests', (currentTestItem) => {
        render(<ItemSlug itemName={currentTestItem.itemName} properties={currentTestItem.properties} listType='Inventory' />);
        expect(screen.getByText(currentTestItem.itemName)).toBeInTheDocument();
        // Object.values(currentTestItem.properties).forEach((property) => {
        //     expect(screen.getAllByText(property)[0]).toBeInTheDocument();
        // })
        expect(screen.getByText("On List")).toBeInTheDocument();
    });
});

describe('renders item slug for shopping view with dummy values', () => {
    test.each(shoppingDummyItems)('smoke tests', (currentTestItem) => {
        render(<ItemSlug itemName={currentTestItem.itemName} properties={currentTestItem.properties} listType='Shopping' />);
        expect(screen.getByText(currentTestItem.itemName)).toBeInTheDocument();
        // Object.values(currentTestItem.properties).forEach((property) => {
        //     expect(screen.getAllByText(property)[0]).toBeInTheDocument();
        // })
        expect(screen.getByText("Got")).toBeInTheDocument();
    });
});
