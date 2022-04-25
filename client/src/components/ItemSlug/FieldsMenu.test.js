import { render, screen } from '@testing-library/react';
import FieldsMenu from './FieldsMenu';
import dummyNormalizedItems from '../../dummyNormalizedItems';
import processedItemsHelper from '../ItemList/processedItemsHelper';

const testItems = [dummyNormalizedItems.items.entities[0], dummyNormalizedItems.items.entities[1]];
const inventoryDummyItems = processedItemsHelper(testItems, 'All', 'Inventory')
const shoppingDummyItems = processedItemsHelper(testItems, 'All', 'Shopping')

describe('renders fields menu in inventory view with dummy properties', () => {
    test.each(inventoryDummyItems)('smoke tests', (currentTestItem) => {
        render(<FieldsMenu properties={currentTestItem.properties}  displayType='Inventory' />);
        Object.entries(currentTestItem.properties).forEach(([key, property]) => {
            if (key !== 'expirationDate') {
                expect(screen.getAllByText(property, {exact: false})[0]).toBeInTheDocument();
            };
        });
    });
});

describe('renders fields menu in shopping view with dummy properties', () => {
    test.each(shoppingDummyItems)('smoke tests', (currentTestItem) => {
        render(<FieldsMenu properties={currentTestItem.properties}  displayType='Inventory' />);
        Object.entries(currentTestItem.properties).forEach(([key, property]) => {
            if (key !== 'expirationDate') {
                expect(screen.getAllByText(property, {exact: false})[0]).toBeInTheDocument();
            };
        });
    });
});

// Renders shopping item menu (?)

// Don't Froget to write Click Tests for Edit Mode!