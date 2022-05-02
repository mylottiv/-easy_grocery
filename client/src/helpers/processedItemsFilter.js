export default function processedItemsFilter(items, currentSection, type) {
    const processedItems = items.reduce(
        (newArray, {id, name, category, section, currentQuantity, desiredQuantity, price, expirationDate, onShoppingList, isBought}) => {
            if ((currentSection === 'All') || (currentSection === section)) {
                const processedItem = {
                    id,
                    itemName: name,
                    properties: {category, currentQuantity, desiredQuantity, price, expirationDate},
                };
                // Which property the processed item is given will function as the Shopping/Inventory flag as well
                if (type === 'Inventory') {
                    processedItem.properties.onShoppingList = onShoppingList;
                }
                else {
                    processedItem.properties.isBought = isBought;
                };
                newArray.push(processedItem);
            };
            return newArray;
        }, []
    );
    return processedItems;
};