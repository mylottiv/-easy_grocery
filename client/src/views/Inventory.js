import {useState} from 'react';
import { Box, Columns, Heading, Panel, Menu, Tabs } from 'react-bulma-components';

function Inventory() {

    const [itemIsVisible, setitemIsVisible] = useState(false);
    const menuOnClick = () => setitemIsVisible(!itemIsVisible)

    return (
        <Columns className='full-height-columns' vCentered marginless>
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
                                <Menu.List.Item renderAs='div'>
                                    <Panel.Block
                                        
                                        onClick={menuOnClick}
                                    >
                                        <Columns.Column>
                                            Pasta
                                            <Menu.List className={(itemIsVisible) ? '' : 'is-hidden'}>
                                                <Menu.List.Item renderAs='div'>Fusili</Menu.List.Item>
                                                <Menu.List.Item renderAs='div'>Penne</Menu.List.Item>
                                                <Menu.List.Item renderAs='div'>Spaghetti</Menu.List.Item>
                                            </Menu.List>
                                        </Columns.Column>
                                    </Panel.Block>
                                </Menu.List.Item>
                            </Menu.List>
                        </Menu>
                    </Panel>
                </Box>
            </Columns.Column>
        </Columns>
    )
}

export default Inventory;