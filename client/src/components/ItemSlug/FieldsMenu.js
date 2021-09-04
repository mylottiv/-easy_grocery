import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu } from 'react-bulma-components';
import Quantity from './Quantity';
import Price from './Price';
import ExpDate from './ExpDate';
import TagGroup from './TagGroup';

function FieldsMenu({properties, isVisible, displayType}) {

    const [editMode, setEditMode] = useState((displayType === 'Shopping'));
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
            <Quantity 
                editMode={editMode}
                editDesiredQuantity={(editMode && displayType === 'Inventory')}
                currentQuantity={properties.currentQuantity} 
                desiredQuantity={properties.desiredQuantity}
            />
            <Price editMode={editMode} priceString={properties.price} />
            {(displayType === 'Inventory') && 
            <>
                <TagGroup editMode={editMode} />
                <ExpDate 
                    editMode={editMode} 
                    editDateString={properties.expirationDateEdit} 
                    staticDateString={properties.expirationDateStatic}
                />
                <Button onClick={editOnClick}>
                    Edit
                </Button>
            </>}
        </Menu.List>
    )
}

FieldsMenu.defaultProps = {
    isVisible: false
}

FieldsMenu.propTypes = {
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

export default FieldsMenu;