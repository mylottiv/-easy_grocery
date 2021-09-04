import PropTypes from 'prop-types';
import {Columns, Form} from 'react-bulma-components';

function ItemQuantity({editMode, editDesiredQuantity, currentQuantity, desiredQuantity}) {

    return (
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
                            <Form.Input size='small' textSize={6} defaultValue={currentQuantity} />
                        </Form.Control>
                    </Form.Field>
                        <span>/</span>
                    <Form.Field className='mb-0'>
                        <Form.Control>
                        <Form.Input size='small' textSize={6} defaultValue={desiredQuantity} isStatic={!editDesiredQuantity}/> 
                        </Form.Control>
                    </Form.Field>
                </>
                : `${currentQuantity} / ${desiredQuantity}`}

            </Columns.Column>
        </Columns>
    )
}

ItemQuantity.propTypes = {
    editMode: PropTypes.bool.isRequired,
    editDesiredQuantity: PropTypes.bool.isRequired,
    currentQuantity: PropTypes.number.isRequired,
    desiredQuantity: PropTypes.number.isRequired
};

export default ItemQuantity;