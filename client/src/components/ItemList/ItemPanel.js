import PropTypes from 'prop-types';
import {Panel, Menu} from 'react-bulma-components';
import variables from '../../dummyVariables';
import Navbar from './Navbar';
import ItemSlug from '../ItemSlug';

function ItemPanel({categories, currentCategory, onChange, items}) {

    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            {(currentCategory !== 'Shopping') && <Navbar 
                categories={categories} 
                selectedCategory={currentCategory} 
                onChange={onChange}
                />}
            <Menu>
                <Menu.List>
                    {items.map(
                        ({itemName, type}) => (
                            <ItemSlug 
                            itemName={itemName} 
                            properties={{...variables, type}} 
                            key={itemName} 
                            listType={(currentCategory === 'Shopping') ? 'Shopping' : 'Inventory'} />)
                    )}
                </Menu.List>
            </Menu>        
        </Panel>
    )
}

ItemPanel.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentCategory: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemPanel