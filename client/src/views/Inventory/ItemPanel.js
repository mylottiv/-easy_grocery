import {useState} from 'react';
import {Panel, Tabs, Menu, Dropdown, Icon} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import ItemSlug from './ItemSlug';
import dummyItems from './dummyItems';

function ItemPanel() {

    const [selectedTab, setSelectedTab] = useState('Pantry');
    const tabOnClick = (tabName) => () => setSelectedTab(tabName);

    return (
        <Panel color='warning'>
            <Panel.Header>
                Items
            </Panel.Header>
            {/* need to switch to dropdown style, final "categories" will be determinant on API used */}
            <Dropdown
                closeOnSelect
                color=""
                icon={<Icon size='small'><FontAwesomeIcon icon={faAngleDown} /></Icon>}
                label="Dropdown label"
            >
                <Dropdown.Item
                renderAs="a"
                value="item"
                >
                    Dropdown item
                </Dropdown.Item>
                <Dropdown.Item
                renderAs="a"
                value="other"
                >
                    Other Dropdown item
                </Dropdown.Item>
                <Dropdown.Item
                renderAs="a"
                value="active"
                >
                    Active Dropdown item
                </Dropdown.Item>
                <Dropdown.Item
                renderAs="a"
                value="other 2"
                >
                    Other Dropdown item
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                renderAs="a"
                value="divider"
                >
                    After divider
                </Dropdown.Item>
            </Dropdown>
            <Tabs size='small' type='toggle' fullwidth>
                {Object.keys(dummyItems).map(
                    (tabName) => (
                        <Tabs.Tab active={(selectedTab === tabName)} onClick={tabOnClick(tabName)} key={tabName}>
                            {tabName}
                        </Tabs.Tab>
                    )
                )}
            </Tabs>
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