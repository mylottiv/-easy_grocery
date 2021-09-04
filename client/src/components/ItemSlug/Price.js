import PropTypes from 'prop-types';
import {Columns, Form} from 'react-bulma-components';

function Price({editMode, priceString}) {
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
                        <Form.Input size='small' textSize={6} defaultValue={priceString} />
                    </Form.Control>
                </Form.Field>
                : priceString}      
            </Columns.Column>
        </Columns>
    )
}

Price.propTypes = {
    editMode: PropTypes.bool.isRequired,
    priceString: PropTypes.string.isRequired
}

export default Price;