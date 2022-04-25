import PropTypes from 'prop-types';
import {Columns, Form} from 'react-bulma-components';

function ExpDate({editMode, dateString}) {
    console.log('dateString!', dateString);
    return (
        <Columns multiline breakpoint='mobile'>
            <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                <span>Exp. Date</span>
            </Columns.Column>
            <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                {/* Form Field and Control seem superfluous here, or at least not worth the formatting pain */}
                {/* <Form.Input className='date-input p-0' type='date' isStatic={!editMode} defaultValue={dateString} /> */}
                {editMode 
                ? <Form.Input className='date-input p-0' type='date' defaultValue={dateString} />
                : dateString}
            </Columns.Column>
        </Columns>
    )
}

ExpDate.defaultValue = {
    editMode: false
};

ExpDate.propTypes = {
    editMode: PropTypes.bool.isRequired,
    dateString: PropTypes.string.isRequired
};

export default ExpDate;