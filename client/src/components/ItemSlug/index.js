import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import { Columns, Button, Menu, Panel, Form } from 'react-bulma-components';
import { useDispatch } from 'react-redux';
import { upsertItem } from '../../redux/itemsSlice';
import defaultValuesFactory from '../../helpers/defaultValuesFactory';
import FieldsList from './FieldsList';

function ItemSlug({itemId, itemName, properties}) {    

    // const {control, handleSubmit, watch, formState: {errors} } = useForm();
    const [itemIsVisible, setItemIsVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const isInventoryView = ("onShoppingList" in properties);
    const checkboxFieldName = isInventoryView ? 'onShoppingList' : 'isBought';

    const dispatch = useDispatch();
    const {control, handleSubmit, watch} = useForm({
        defaultValues: defaultValuesFactory(itemName, properties)
    });
    const onSubmit = (data) => {
        console.log('Data submitted', {...data[itemName], id: itemId});
        return dispatch(upsertItem({...data[itemName], id: itemId}))
    };
    const menuOnClick = (e) => {
        e.preventDefault();
        return setItemIsVisible(!itemIsVisible);
    };

    // not entirely comfortable with this, but spies the checkbox and submits form when its changed and not editing
    useEffect(() => {
        const subscription = watch((data, { name }) => {
            // console.log(data, data[itemName][checkboxFieldName], name);
            if (!editMode && (name === `${itemName}.${checkboxFieldName}`)) handleSubmit(onSubmit)();
        });
        return () => subscription.unsubscribe();
      }, [watch, editMode]);

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
                                        <span className='pr-2'>{isInventoryView ? 'On List' : 'Got'}</span>
                                        <Controller 
                                            name={`${itemName}.${checkboxFieldName}`}
                                            control={control}
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
                        <FieldsList isVisible={itemIsVisible} editMode={editMode} setEditMode={setEditMode} itemName={itemName} properties={properties} control={control} />
                    </form>
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
};

ItemSlug.propTypes = {
    itemId: PropTypes.number.isRequired,
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