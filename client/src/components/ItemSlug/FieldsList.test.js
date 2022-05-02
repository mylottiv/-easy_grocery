import { render, screen } from '@testing-library/react';
import FieldsList from './FieldsList';
import dummyNormalizedItems from '../../dummyNormalizedItems';
import processedItemsFilter from '../../helpers/processedItemsFilter';

const testItems = [dummyNormalizedItems.items.entities[0], dummyNormalizedItems.items.entities[1]];
const inventoryDummyItems = processedItemsFilter(testItems, 'All', 'Inventory')
const shoppingDummyItems = processedItemsFilter(testItems, 'All', 'Shopping')

describe('renders fields menu in inventory view with dummy properties', () => {
    test.each(inventoryDummyItems)('smoke tests', (currentTestItem) => {
        render(<FieldsList properties={currentTestItem.properties} />);
        Object.entries(currentTestItem.properties).forEach(([key, property]) => {
            if (key !== 'expirationDate') {
                expect(screen.getAllByText(property, {exact: false})[0]).toBeInTheDocument();
            };
        });
    });
});

describe('renders fields menu in shopping view with dummy properties', () => {
    test.each(shoppingDummyItems)('smoke tests', (currentTestItem) => {
        render(<FieldsList properties={currentTestItem.properties} />);
        Object.entries(currentTestItem.properties).forEach(([key, property]) => {
            if (key !== 'expirationDate') {
                expect(screen.getAllByText(property, {exact: false})[0]).toBeInTheDocument();
            };
        });
    });
});

// Renders shopping item menu (?)

// Don't Froget to write Click Tests for Edit Mode!