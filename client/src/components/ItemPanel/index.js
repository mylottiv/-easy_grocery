import {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Menu} from 'react-bulma-components';
import dummyItems from '../../dummyItems';
import Navbar from './Navbar';
import ItemSlug from '../ItemSlug';

function ItemPanel({viewType}) {

    const [currentCategory, setCurrentCategory] = useState((viewType === 'Inventory') ? 'Pantry' : 'Shopping');
    const dummyData = (viewType === 'Inventory') ? dummyItems[currentCategory] : dummyItems.Shopping;

    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            {/* final "categories" will be determinant on API used */}
            {(viewType === 'Inventory') && <Navbar 
                categories={Object.keys(dummyItems)} 
                selectedCategory={currentCategory} 
                onChange={(tabName) => setCurrentCategory(tabName)}
                />}
            <Menu>
                <Menu.List>
                    {dummyData.map(
                        ({itemName, category}) => (
                            <ItemSlug 
                            itemName={itemName} 
                            properties={{...dummyItems.variables, category}} 
                            key={itemName} 
                            listType={viewType} />)
                    )}
                </Menu.List>
            </Menu>        
        </Panel>
    )
}

ItemPanel.propTypes = {
    viewType: PropTypes.string.isRequired
};

export default ItemPanel