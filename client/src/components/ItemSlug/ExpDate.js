import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {Columns, Form} from 'react-bulma-components';

function ExpDate({editMode, dateString, control, formName}) {
    return (
        <Columns multiline breakpoint='mobile'>
            <Columns.Column display='flex' flexDirection='column' justifyContent='center'>
                <span>Exp. Date</span>
            </Columns.Column>
            <Columns.Column display='flex' flexDirection='row' justifyContent='flex-end'>
                {editMode 
                ?                 
                <Form.Field>
                    <Form.Control>
                    <Controller 
                        name={formName}
                        control={control}
                        defaultValue={dateString}
                        render={({field: { onChange, value, ref }}) =>
                            <Form.Input 
                                className='date-input p-0'
                                type='date'
                                onChange={onChange}
                                defaultValue={value}
                                domRef={ref}
                            />
                        }
                    />
                    </Form.Control>
                </Form.Field>
                : <span>{dateString}</span>
                }
            </Columns.Column>
        </Columns>
    )
}

ExpDate.defaultValue = {
    editMode: false
};

ExpDate.propTypes = {
    editMode: PropTypes.bool.isRequired,
    dateString: PropTypes.string.isRequired,
    control: PropTypes.oneOfType([PropTypes.object]).isRequired,
    formName: PropTypes.string.isRequired
};

export default ExpDate;