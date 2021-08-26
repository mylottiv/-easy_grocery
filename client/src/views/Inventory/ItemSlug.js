import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Panel, Form } from 'react-bulma-components';
import ItemMenu from './ItemMenu';

function ItemSlug({itemName, category}) {

    const [itemIsVisible, setItemIsVisible] = useState(false);
    const menuOnClick = () => setItemIsVisible(!itemIsVisible)

    return (
        <Menu.List.Item renderAs='div'>
            <Panel.Block>
                <Columns.Column>
                    <Columns breakpoint='mobile' display='flex-row' alignItems='center'>
                        <Columns.Column paddingless alignItems='center'>
                            <Button display='flex-row' paddingless text fullwidth justifyContent='flex-start' onClick={menuOnClick} style={{whiteSpace: "normal"}}>
                                <span>{itemName}</span>
                            </Button> 
                        </Columns.Column>
                        <Columns.Column display='flex-row' justifyContent='flex-end' className='pr-0 pl-0' size='one-third'>
                            <Form.Field >                            
                                <Form.Control>
                                    <span className='pr-2'>On List</span>
                                    <Form.Checkbox />
                                </Form.Control>
                            </Form.Field>
                        </Columns.Column>
                    </Columns>
                    <ItemMenu isVisible={itemIsVisible} category={category} />
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
}

ItemSlug.propTypes = {
    itemName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default ItemSlug