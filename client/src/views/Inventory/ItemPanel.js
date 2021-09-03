import {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, Menu, Dropdown, Icon, Level} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ItemSlug from './ItemSlug';
import dummyItems from '../../dummyItems';

function ItemPanel({viewType}) {

    const [selectedTab, setSelectedTab] = useState((viewType === 'Inventory') ? 'Pantry' : 'Shopping');
    const tabOnClick = (tabName) => setSelectedTab(tabName);
    const dummyData = (viewType === 'Inventory') ? dummyItems[selectedTab] : dummyItems.Shopping;

    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            {/* final "categories" will be determinant on API used */}
            <Level justifyContent='center' className='mt-4 mb-0' breakpoint='mobile'>
                <Dropdown
                    closeOnSelect
                    icon={<Icon size='small'><FontAwesomeIcon icon={faAngleDown} /></Icon>}
                    onChange={tabOnClick}
                    label={`Category: ${selectedTab}`}
                >
                    {Object.keys(dummyItems).map(
                        (tabName) => (
                            <Dropdown.Item renderAs='a' active={(selectedTab === tabName)} value={tabName} key={tabName}>
                                {tabName}
                            </Dropdown.Item>
                        )
                    )}
                </Dropdown>
            </Level>
            <Menu>
                <Menu.List>
                    {dummyData.map(
                        ({itemName, category}) => (<ItemSlug itemName={itemName} category={category} key={itemName} listType={viewType} />)
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