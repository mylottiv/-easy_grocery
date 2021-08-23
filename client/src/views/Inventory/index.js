// import {useState} from 'react';
// import { Box, Columns, Heading, Panel, Menu, Tabs, Form } from 'react-bulma-components';
import { Box, Columns, Heading, Panel, Menu, Tabs } from 'react-bulma-components';
import ItemSlug from './ItemSlug';

function Inventory() {

    // const [itemIsVisible, setitemIsVisible] = useState(false);
    // const menuOnClick = () => setitemIsVisible(!itemIsVisible)

    return (
        <Columns className='full-height-columns' vCentered marginless breakpoint='mobile'>
            <Columns.Column>
                <Box>
                    <Heading>
                        Inventory
                    </Heading>
                    <Panel color='warning'>
                        <Panel.Header>
                            Items
                        </Panel.Header>
                        <Tabs size='small' type='toggle' fullwidth>
                            <Tabs.Tab active>
                            Pantry
                            </Tabs.Tab>
                            <Tabs.Tab>
                            Fresh
                            </Tabs.Tab>
                            <Tabs.Tab>
                            Frozen
                            </Tabs.Tab>
                            <Tabs.Tab>
                            Cleaning
                            </Tabs.Tab>
                        </Tabs>
                        <Menu>
                            <Menu.List>
                                <ItemSlug itemName='Pasta' brands={['fusili', 'penne', 'spaghetti']} />
                                <ItemSlug itemName='Bread' brands={['baguette', 'pita', 'tortilla']} />
                            </Menu.List>
                        </Menu>
                    </Panel>
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Inventory;