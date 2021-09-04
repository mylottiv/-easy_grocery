import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Form } from 'react-bulma-components';
import TagGroup from './TagGroup';
import ItemQuantity from './Quantity';

function ItemMenu({properties, isVisible, displayType}) {

    const [editMode, setEditMode] = useState(false);
    const editOnClick = () => setEditMode(!editMode);

    return (
        <Menu.List display={(isVisible) ? 'block' : 'hidden'}>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Category</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                    {properties.category}
                </Columns.Column>
            </Columns>
            <ItemQuantity editMode currentQuantity={properties.currentQuantity} desiredQuantity={properties.desiredQuantity} />
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
            {(displayType === 'Inventory') && <TagGroup editMode />}
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
    isVisible: PropTypes.bool,
    displayType: PropTypes.string.isRequired,
    properties: PropTypes.shape({ 
        category: PropTypes.string.isRequired,
        currentQuantity: PropTypes.number.isRequired,
        desiredQuantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        expirationDateStatic: PropTypes.string.isRequired,
        expirationDateEdit: PropTypes.string.isRequired
    }).isRequired
}

export default ItemMenu;