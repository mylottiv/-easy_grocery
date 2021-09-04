import PropTypes from 'prop-types';
import {Columns, Tag, Form} from 'react-bulma-components'; 

function TagGroup({editMode}) {
    return (
        <Columns multiline breakpoint='mobile'>
            <Columns.Column>
                <span>Tags</span>
            </Columns.Column>
            <Columns.Column display='flex' flexDirection='column' align-items='center'>
                <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                    <Tag color="success" className='m-0'>
                        My Tag
                    </Tag>
                    <Tag remove className='m-0' />
                </Tag.Group>
                <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                    <Tag color="warning" className='m-0'>
                        Tag 2
                    </Tag>
                    <Tag remove className='m-0' />
                </Tag.Group>
                <Tag.Group hasAddons display='flex' flexDirection='row' align-items='center' mb='1'>
                    <Tag color="danger" className='m-0'>
                        Tag 3
                    </Tag>
                    <Tag remove className='m-0' />
                </Tag.Group>
                {editMode &&
                <Form.Field>
                    <Form.Control>
                        <Form.Label>Add Tag</Form.Label><Form.Input size='small' textSize={6} />
                    </Form.Control>
                </Form.Field>}
            </Columns.Column>
        </Columns>
    )
}

TagGroup.propTypes = {
    editMode: PropTypes.bool.isRequired
}

export default TagGroup;