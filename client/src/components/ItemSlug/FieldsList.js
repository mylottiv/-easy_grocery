import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu } from 'react-bulma-components';
import Quantity from './Quantity';
import Price from './Price';
import ExpDate from './ExpDate';
import TagGroup from './TagGroup';
import dateFormatHelper from './dateFormatHelper';

function FieldsList({itemName, properties, isVisible, control}) {

    const [editMode, setEditMode] = useState(false);
    const editOnClick = () => setEditMode(!editMode);
    if (!isVisible && editMode) setEditMode(false);

    return (
        <Menu.List display={(isVisible) ? 'block' : 'hidden'}>
            <Columns multiline breakpoint='mobile'>
                <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                    <span>Category</span>
                </Columns.Column>
                <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                    <span>{properties.category}</span>
                </Columns.Column>
            </Columns>
            <Quantity 
                editMode={editMode}
                editDesiredQuantity={(editMode && "onShoppingList" in properties)}
                currentQuantity={properties.currentQuantity}
                desiredQuantity={properties.desiredQuantity}
                control={control}
                formNames={{currentQuantity: `${itemName}.currentQuantity`, desiredQuantity: `${itemName}.desiredQuantity`}}
            />
            <Price editMode={editMode} priceString={properties.price} control={control} formName={`${itemName}.price`} />
            {("onShoppingList" in properties) && 
                <>
                    <TagGroup editMode={editMode} />
                    <ExpDate 
                        editMode={editMode} 
                        dateString={editMode ? properties.expirationDate : dateFormatHelper(properties.expirationDate)}
                        control={control}
                        formName={`${itemName}.expirationDate`}
                    />
                </>
            }
            <Button onClick={editOnClick}>
                Edit
            </Button>
        </Menu.List>
    )
}

FieldsList.defaultProps = {
    isVisible: false
}

FieldsList.propTypes = {
    isVisible: PropTypes.bool,
    itemName: PropTypes.string.isRequired,
    properties: PropTypes.shape({ 
        category: PropTypes.string.isRequired,
        currentQuantity: PropTypes.number.isRequired,
        desiredQuantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        onShoppingList: PropTypes.bool,
        isBought: PropTypes.bool
    }).isRequired,
    control: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default FieldsList;