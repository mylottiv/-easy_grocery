import {useState} from 'react';
import {Panel, Menu, Dropdown, Icon, Level} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ItemSlug from './ItemSlug';
import dummyItems from './dummyItems';

function ItemPanel() {

    const [selectedTab, setSelectedTab] = useState('Pantry');
    const tabOnClick = (tabName) => setSelectedTab(tabName);

    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            {/* final "categories" will be determinant on API used */}
            <Level justifyContent='center' breakpoint='mobile'>
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
                    {dummyItems[selectedTab].map(
                        ({itemName, category}) => (<ItemSlug itemName={itemName} category={category} key={itemName}/>)
                    )}
                </Menu.List>
            </Menu>        
        </Panel>
    )
}

export default ItemPanel