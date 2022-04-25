import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Panel, Form } from 'react-bulma-components';
import FieldsMenu from './FieldsMenu';

function ItemSlug({itemName, properties, listType}) {

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
                                    <span className='pr-2'>{(listType === 'Inventory') ? 'On List' : 'Got'}</span>
                                    <Form.Checkbox />
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                    </Columns>
                    <FieldsMenu isVisible={itemIsVisible} properties={properties} displayType={listType} />
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
};

ItemSlug.propTypes = {
    itemName: PropTypes.string.isRequired,
    listType: PropTypes.string.isRequired,
    properties: PropTypes.shape({ 
        category: PropTypes.string.isRequired,
        currentQuantity: PropTypes.number.isRequired,
        desiredQuantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
    }).isRequired
};

export default ItemSlug