import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Columns, Menu, Panel } from 'react-bulma-components';
import { useDispatch } from 'react-redux';
import { upsertItem } from '../../redux/itemsSlice';
import defaultValuesFactory from '../../helpers/defaultValuesFactory';
import MenuButton from './MenuButton';
import FieldsList from './FieldsList';

function ItemSlug({ itemId, itemName, properties }) {
  // const {control, handleSubmit, watch, formState: {errors} } = useForm();
  const [itemIsVisible, setItemIsVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const isInventoryView = 'onShoppingList' in properties;
  const checkboxFieldName = isInventoryView
    ? `${itemName}.onShoppingList`
    : `${itemName}.isBought`;

  const dispatch = useDispatch();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: defaultValuesFactory(itemName, properties),
  });
  const onSubmit = (data) => {
    console.log('Data submitted', { ...data[itemName], id: itemId });
    return dispatch(upsertItem({ ...data[itemName], id: itemId }));
  };
  const menuOnClick = (e) => {
    e.preventDefault();
    return setItemIsVisible(!itemIsVisible);
  };

  // Spies the checkbox and submits the form when its changed and not editing
  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (!editMode && name === checkboxFieldName) handleSubmit(onSubmit)();
    });
    return () => subscription.unsubscribe();
  }, [watch, editMode]);

  return (
    <Menu.List.Item renderAs="div">
      <Panel.Block>
        <Columns.Column>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MenuButton 
              itemName={itemName}
              onClick={menuOnClick}
              isInventoryView={isInventoryView}
              checkboxName={checkboxFieldName}
              control={control}
            />
            <FieldsList
              isVisible={itemIsVisible}
              editMode={editMode}
              setEditMode={setEditMode}
              itemName={itemName}
              properties={properties}
              control={control}
            />
          </form>
        </Columns.Column>
      </Panel.Block>
    </Menu.List.Item>
  );
}

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
    isBought: PropTypes.bool,
  }).isRequired,
};

export default ItemSlug;
