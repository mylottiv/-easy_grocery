export default function onShoppingFilter(state) {
    return state.reduce((newArray, item) => {
        if (item.onShoppingList) {
            newArray.push(item)
        }
        return newArray;
    }, []);
};