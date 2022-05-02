import PropTypes from 'prop-types';
import {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import { Columns, Button, Menu, Panel, Form } from 'react-bulma-components';
import FieldsList from './FieldsList';

function ItemSlug({itemName, properties}) {    
    // Controllers, state, and hooks will get passed down from here into the field components
    // Composed at this level even, if neccessary

    // const {control, handleSubmit, watch, formState: {errors} } = useForm();
    const {control, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log('Data submitted', data);
    const [itemIsVisible, setItemIsVisible] = useState(false);
    const menuOnClick = () => setItemIsVisible(!itemIsVisible)

    // Initialized values seem to be undefined....Keep in mind when making API calls
    // console.log(`${itemName}.onList`, watch(`${itemName}.onList`));

    return (
        <Menu.List.Item renderAs='div'>
            <Panel.Block>
                <Columns.Column>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Columns breakpoint='mobile' display='flex-row' alignItems='center'>
                            <Columns.Column paddingless alignItems='center'>
                                <Button display='flex-row' paddingless text fullwidth justifyContent='flex-start' onClick={menuOnClick} style={{whiteSpace: "normal"}}>
                                    <span>{itemName}</span>
                                </Button> 
                            </Columns.Column>
                            <Columns.Column display='flex-row' justifyContent='flex-end' className='pr-0 pl-0' size='one-third'>
                                <Form.Field >                            
                                    <Form.Control>
                                        <span className='pr-2'>{("onShoppingList" in properties) ? 'On List' : 'Got'}</span>
                                        <Controller 
                                            name={`${itemName}.onList`}
                                            control={control}
                                            defaultValue={("onShoppingList" in properties) ? properties.onShoppingList : properties.isBought}
                                            render={({field: { onChange, value, ref }}) => 
                                                <Form.Checkbox 
                                                    onChange={onChange}
                                                    checked={value}
                                                    domRef={ref}
                                                />
                                            }
                                        />  
                                    </Form.Control>
                                </Form.Field>                          
                            </Columns.Column>
                        </Columns>
                        <FieldsList isVisible={itemIsVisible} properties={properties} control={control} />
                    </form>
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
};

ItemSlug.propTypes = {
    itemName: PropTypes.string.isRequired,
    properties: PropTypes.shape({ 
        category: PropTypes.string.isRequired,
        currentQuantity: PropTypes.number.isRequired,
        desiredQuantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        expirationDate: PropTypes.string.isRequired,
        onShoppingList: PropTypes.bool,
        isBought: PropTypes.bool
    }).isRequired
};

export default ItemSlug