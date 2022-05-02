import PropTypes from 'prop-types';
import {Panel, Menu} from 'react-bulma-components';
import {useState} from 'react';
import processedItemsFilter from '../../helpers/processedItemsFilter';
import Navbar from './Navbar';
import ItemSlug from '../ItemSlug';

function ItemList({items, sections, type}) {

    const [currentSection, setCurrentSection] = useState('All');
    const slugItemsData = processedItemsFilter(items, currentSection, type);

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
                    {slugItemsData.map(({id, itemName, properties}) => 
                        (<ItemSlug 
                            itemId={id}
                            itemName={itemName}
                            properties={properties}
                            key={itemName}
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