import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {Columns, Form} from 'react-bulma-components';

function ItemQuantity({editMode, editDesiredQuantity, currentQuantity, desiredQuantity, control}) {

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
                        <Controller 
                            name='itemName currentQuantity'
                            control={control}
                            defaultValue={currentQuantity}
                            render={({field: { onChange, value, ref }}) => 
                                <Form.Input 
                                    size='small'
                                    textSize={6}
                                    onChange={onChange}
                                    defaultValue={value}
                                    domRef={ref} 
                                />
                            }
                        />
                        </Form.Control>
                    </Form.Field>
                    <span>/</span>
                    <Form.Field className='mb-0'>
                        <Form.Control>
                        <Controller 
                            name='itemName desiredQuantity'
                            control={control}
                            defaultValue={desiredQuantity}
                            render={({field: { onChange, value, ref }}) => 
                                <Form.Input 
                                    size='small'
                                    textSize={6}
                                    onChange={onChange}
                                    defaultValue={value}
                                    domRef={ref} 
                                    isStatic={!editDesiredQuantity}
                                />
                            }
                        />
                        </Form.Control>
                    </Form.Field>
                </>
                :                 
                <span>{`${currentQuantity} / ${desiredQuantity}`}</span>
                }
            </Columns.Column>
        </Columns>
    )
}

ItemQuantity.propTypes = {
    editMode: PropTypes.bool.isRequired,
    editDesiredQuantity: PropTypes.bool.isRequired,
    currentQuantity: PropTypes.number.isRequired,
    desiredQuantity: PropTypes.number.isRequired,
    control: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default ItemQuantity;