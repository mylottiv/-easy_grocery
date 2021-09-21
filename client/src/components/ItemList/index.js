import {useState} from 'react';
import PropTypes from 'prop-types';
import dummyItems from '../../dummyItems';
import ItemPanel from './ItemPanel';

function ItemList({viewType}) {

    const [currentCategory, setCurrentCategory] = useState((viewType === 'Inventory') ? 'Pantry' : 'Shopping');
    const dummyData = (viewType === 'Inventory') ? dummyItems[currentCategory] : dummyItems.Shopping;

    return (
        <>
            <ItemPanel 
                categories={Object.keys(dummyItems)}
                currentCategory={currentCategory}
                onChange={(category) => setCurrentCategory(category)} 
                items={dummyData}
            />
        </>
    )
}

ItemList.propTypes = {
    viewType: PropTypes.string.isRequired
};

export default ItemList