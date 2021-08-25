import {useState} from 'react';
import {Panel, Tabs, Menu} from 'react-bulma-components';
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