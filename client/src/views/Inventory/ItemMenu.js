import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Form, Tag } from 'react-bulma-components';

function ItemMenu({category, isVisible}) {

    const [editMode, setEditMode] = useState(false);
    const editOnClick = () => setEditMode(!editMode);

    return (
        <Menu.List display={(isVisible) ? 'block' : 'hidden'}>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Category</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                    {category}
                </Columns.Column>
            </Columns>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Quantity</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                    {editMode 
                    ?
                    <>
                        <Form.Field className='mb-0'>
                            <Form.Control>
                                <Form.Input size='small' textSize={6} defaultValue={10} />
                            </Form.Control>
                        </Form.Field>
                            <span>/</span>
                        <Form.Field className='mb-0'>
                            <Form.Control>
                                <Form.Input size='small' textSize={6} defaultValue={42} /> 
                            </Form.Control>
                        </Form.Field>
                    </>
                    : "10 / 42"}

                </Columns.Column>
            </Columns>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Price</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
                    <span>$</span>
                    {editMode 
                    ? 
                    <Form.Field>
                        <Form.Control>
                            <Form.Input size='small' textSize={6} defaultValue={1.52} />
                        </Form.Control>
                    </Form.Field>
                    : "1.52"}      
                </Columns.Column>
            </Columns>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Exp. Date</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                    {/* Form Field and Control seem superfluous here, or at least not worth the formatting pain */}
                    {editMode 
                    ? <Form.Input className='date-input p-0' type='date' defaultValue='2021-10-12' />
                    : "10/12/2021"}
                </Columns.Column>
            </Columns>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column>
                    <span>Tags</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='column' align-items='center'>
                    <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                        <Tag color="success" className='m-0'>
                            My Tag
                        </Tag>
                        <Tag remove className='m-0' />
                    </Tag.Group>
                    <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                        <Tag color="warning" className='m-0'>
                            Tag 2
                        </Tag>
                        <Tag remove className='m-0' />
                    </Tag.Group>
                    <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                        <Tag color="danger" className='m-0'>
                            Tag 3
                        </Tag>
                        <Tag remove className='m-0' />
                    </Tag.Group>
                    {editMode &&
                    <Form.Field>
                        <Form.Control>
                            <Form.Label>Add Tag</Form.Label><Form.Input size='small' textSize={6} />
                        </Form.Control>
                    </Form.Field>}
                </Columns.Column>
            </Columns>
            <Button onClick={editOnClick}>
                Edit
            </Button>
        </Menu.List>
    )
}

ItemMenu.defaultProps = {
    isVisible: false
}

ItemMenu.propTypes = {
    category: PropTypes.string.isRequired,
    isVisible: PropTypes.bool
}

export default ItemMenu;