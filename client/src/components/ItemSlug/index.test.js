import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemSlug from '.';
import dummyNormalizedItems from '../../dummyNormalizedItems';
import processedItemsFilter from '../../helpers/processedItemsFilter';

const testItems = [dummyNormalizedItems.items.entities[0], dummyNormalizedItems.items.entities[1]];
// Hacky fix for dummy variables
testItems[0].onShoppingList = true;
const inventoryDummyItems = processedItemsFilter(testItems, 'All', 'Inventory')
const shoppingDummyItems = processedItemsFilter(testItems, 'All', 'Shopping')

describe('renders item slug for inventory view with dummy values', () => {
    test.each(inventoryDummyItems)('smoke tests', (currentTestItem) => {
        render(<ItemSlug itemName={currentTestItem.itemName} properties={currentTestItem.properties} listType='Inventory' />);
        expect(screen.getByText(currentTestItem.itemName)).toBeInTheDocument();
        expect(screen.getByText("On List")).toBeInTheDocument();
    });
    test('Clicking the Slug once opens the Fields List', () => {
        const testItem = inventoryDummyItems[0];
        render(<ItemSlug itemName={testItem.itemName} properties={testItem.properties} listType='Inventory' />);
        userEvent.click(screen.getByText(testItem.itemName));
        expect(screen.getAllByText('Category')[0]).toBeVisible();
    })
    test('Clicking the Slug twice closes the Fields List', () => {
        const testItem = inventoryDummyItems[0];
        render(<ItemSlug itemName={testItem.itemName} properties={testItem.properties} listType='Inventory' />);
        userEvent.dblClick(screen.getByText(testItem.itemName));
        expect(screen.getAllByText('Category')[0]).not.toBe();
    })
});

describe('renders item slug for shopping view with dummy values', () => {
    test.each(shoppingDummyItems)('smoke tests', (currentTestItem) => {
        render(<ItemSlug itemName={currentTestItem.itemName} properties={currentTestItem.properties} listType='Shopping' />);
        expect(screen.getByText(currentTestItem.itemName)).toBeInTheDocument();
        expect(screen.getByText("Got")).toBeInTheDocument();
    });
    test('Clicking the Slug once opens the Fields List', () => {
        const testItem = shoppingDummyItems[0];
        render(<ItemSlug itemName={testItem.itemName} properties={testItem.properties} listType='Shopping' />);
        userEvent.click(screen.getByText(testItem.itemName));
        expect(screen.getAllByText('Category')[0]).toBeVisible();
    })
    test('Clicking the Slug twice closes the Fields List', () => {
        const testItem = shoppingDummyItems[0];
        render(<ItemSlug itemName={testItem.itemName} properties={testItem.properties} listType='Shopping' />);
        userEvent.dblClick(screen.getByText(testItem.itemName));
        expect(screen.getAllByText('Category')[0]).not.toBe();
    })
});
