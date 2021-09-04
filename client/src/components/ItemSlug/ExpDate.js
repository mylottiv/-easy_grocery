import PropTypes from 'prop-types';
import {Columns, Form} from 'react-bulma-components';

function ExpDate({editMode, staticDateString, editDateString}) {
    return (
        <Columns multiline breakpoint='mobile'>
            <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                <span>Exp. Date</span>
            </Columns.Column>
            <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                {/* Form Field and Control seem superfluous here, or at least not worth the formatting pain */}
                {editMode 
                ? <Form.Input className='date-input p-0' type='date' defaultValue={editDateString} />
                : staticDateString}
            </Columns.Column>
        </Columns>
    )
}

ExpDate.propTypes = {
    editMode: PropTypes.bool.isRequired,
    staticDateString: PropTypes.string.isRequired,
    editDateString: PropTypes.string.isRequired,
}

export default ExpDate;