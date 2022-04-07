import PropTypes from 'prop-types';
import {Panel, Menu} from 'react-bulma-components';
import {useState} from 'react';
import Navbar from './Navbar';
import ItemSlug from '../ItemSlug';

function ItemList({items, sections, type}) {

    const [currentSection, setCurrentSection] = useState('All');
    const processedItems = Object.entries(items).reduce(
        // eslint-disable-next-line no-unused-vars
        (newArray, [key, {name, category, section, currentQuantity, desiredQuantity, price, expirationDate, formattedDate}]) => {
            if ((currentSection === 'All') || (currentSection === section)) {
                    newArray.push(
                        {
                        itemName: name,
                        properties: {category, currentQuantity, desiredQuantity, price, expirationDate, formattedDate},
                        listType: (type === 'Shopping') ? 'Shopping' : 'Inventory'
                        }
                    );
            };
            return newArray;
        }, []
    );
    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            <Navbar 
                sections={sections} 
                selectedSection={currentSection} 
                onChange={(section) => setCurrentSection(section)}
            />
            <Menu>
                <Menu.List>
                    {processedItems.map(({itemName, properties, listType}) => 
                        (<ItemSlug 
                            itemName={itemName}
                            properties={properties}
                            key={itemName}
                            listType={listType}
                        />)
                    )}
                </Menu.List>
            </Menu>        
        </Panel>
    )
}

ItemList.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    type: PropTypes.string.isRequired
};

export default ItemList