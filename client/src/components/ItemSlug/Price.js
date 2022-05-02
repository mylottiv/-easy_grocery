import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {Columns, Form} from 'react-bulma-components';

function Price({editMode, priceString, control}) {
    return (
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
                    <Controller 
                        name='itemName price'
                        control={control}
                        defaultValue={priceString}
                        render={({field: { onChange, value, ref}}) => 
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
                : <span>{priceString}</span>
                }      
            </Columns.Column>
        </Columns>
    )
}

Price.propTypes = {
    editMode: PropTypes.bool.isRequired,
    priceString: PropTypes.string.isRequired,
    control: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default Price;