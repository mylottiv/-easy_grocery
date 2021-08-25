import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Panel, Form, Tag } from 'react-bulma-components';

function ItemSlug({itemName, category}) {

    const [itemIsVisible, setItemIsVisible] = useState(false);
    const menuOnClick = () => setItemIsVisible(!itemIsVisible)

    return (
        <Menu.List.Item renderAs='div'>
            <Panel.Block>
                <Columns.Column>
                    <Columns breakpoint='mobile' display='flex-row' alignItems='center'>
                        <Columns.Column paddingless alignItems='center'>
                            <Button display='flex-row' paddingless text fullwidth justifyContent='flex-start' onClick={menuOnClick} style={{whiteSpace: "normal"}}>
                                <span>{itemName}</span>
                            </Button> 
                        </Columns.Column>
                        <Columns.Column display='flex-row' justifyContent='flex-end' className='pr-0 pl-0' size='one-third'>
                            <Form.Field >                            
                                <Form.Control>
                                    <span className='pr-2'>On List</span>
                                    <Form.Checkbox />
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                    </Columns>
                    <Menu.List className={(itemIsVisible) ? '' : 'is-hidden'}>
                        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
                            <Columns multiline breakpoint='mobile'>
                                <Columns.Column>
                                    Category
                                </Columns.Column>
                                <Columns.Column display='flex' justifyContent='flex-end'>
                                    {category}
                                </Columns.Column>
                            </Columns>
                        </Menu.List.Item>
                        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
                            <Columns multiline breakpoint='mobile'>
                                <Columns.Column>
                                    Quantity
                                </Columns.Column>
                                <Columns.Column display='flex' justifyContent='flex-end'>
                                    10 / 42
                                </Columns.Column>
                            </Columns>
                        </Menu.List.Item>
                        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
                            <Columns multiline breakpoint='mobile'>
                                <Columns.Column>
                                    Price
                                </Columns.Column>
                                <Columns.Column display='flex' justifyContent='flex-end'>
                                    $1.52
                                </Columns.Column>
                            </Columns>
                        </Menu.List.Item>
                        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
                            <Columns multiline breakpoint='mobile'>
                                <Columns.Column>
                                    Exp. Date
                                </Columns.Column>
                                <Columns.Column display='flex' justifyContent='flex-end'>
                                    10/12/2021
                                </Columns.Column>
                            </Columns>
                        </Menu.List.Item>
                        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
                            <Columns multiline breakpoint='mobile'>
                                <Columns.Column>
                                    Tags
                                </Columns.Column>
                                <Columns.Column display='flex-column' align-items='center'>
                                    <Tag.Group hasAddons display='flex-row' align-items='center' mb='1'>
                                        <Tag color="success" className='m-0'>
                                        My Tag
                                        </Tag>
                                        <Tag remove className='m-0' />
                                    </Tag.Group>
                                    <Tag.Group hasAddons display='flex-row' align-items='center' mb='1'>
                                        <Tag color="warning" className='m-0'>
                                        Tag 2
                                        </Tag>
                                        <Tag remove className='m-0' />
                                    </Tag.Group>
                                    <Tag.Group hasAddons display='flex-row' align-items='center' mb='1'>
                                        <Tag color="danger" className='m-0'>
                                        Tag 3
                                        </Tag>
                                        <Tag remove className='m-0' />
                                    </Tag.Group>
                                </Columns.Column>
                            </Columns>
                        </Menu.List.Item>
                    </Menu.List>
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
}

ItemSlug.propTypes = {
    itemName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default ItemSlug