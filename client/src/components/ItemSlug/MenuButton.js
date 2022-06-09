import PropTypes from 'react';
import { Columns, Button, Form } from 'react-bulma-components';
import { Controller } from 'react-hook-form';

function MenuButton({
  itemName,
  onClick,
  isInventoryView,
  checkboxName,
  control,
}) {
  return (
    <Columns breakpoint="mobile" display="flex-row" alignItems="center">
      <Columns.Column paddingless alignItems="center">
        <Button
          display="flex-row"
          paddingless
          text
          fullwidth
          justifyContent="flex-start"
          onClick={onClick}
          style={{ whiteSpace: 'normal' }}
        >
          <span>{itemName}</span>
        </Button>
      </Columns.Column>
      <Columns.Column
        display="flex-row"
        justifyContent="flex-end"
        className="pr-0 pl-0"
        size="one-third"
      >
        <Form.Field>
          <Form.Control>
            <span className="pr-2">{isInventoryView ? 'On List' : 'Got'}</span>
            <Controller
              name={checkboxName}
              control={control}
              render={({ field: { onChange, value, ref } }) => (
                <Form.Checkbox
                  onChange={onChange}
                  checked={value}
                  domRef={ref}
                />
              )}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
    </Columns>
  );
}

MenuButton.propTypes = {
  itemName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isInventoryView: PropTypes.bool.isRequired,
  checkboxName: PropTypes.string.isRequired,
  control: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MenuButton;
