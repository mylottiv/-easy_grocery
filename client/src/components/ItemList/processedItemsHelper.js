export default function processedItemsHelper(items, currentSection, type) {
    const processedItems = items.reduce(
        (newArray, {name, category, section, currentQuantity, desiredQuantity, price, expirationDate}) => {
            if ((currentSection === 'All') || (currentSection === section)) {
                    newArray.push(
                        {
                        itemName: name,
                        properties: {category, currentQuantity, desiredQuantity, price, expirationDate},
                        listType: (type === 'Shopping') ? 'Shopping' : 'Inventory'
                        }
                    );
            };
            return newArray;
        }, []
    );
    return processedItems;
};