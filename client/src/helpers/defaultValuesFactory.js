export default function defaultValuesFactory(itemName, rawProperties) {
    const processedProperties = {};
    processedProperties[itemName] = {};
    Object.entries(rawProperties).forEach(([propName, propVal]) => {
        if (propName !== 'category') processedProperties[itemName][propName] = propVal;
    })
    return processedProperties;
}