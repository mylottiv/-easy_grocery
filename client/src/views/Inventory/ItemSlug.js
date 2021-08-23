import PropTypes from 'prop-types';
import {useState} from 'react';
import { Columns, Button, Menu, Panel, Form } from 'react-bulma-components';

function BrandSlug({brandName}) {
    return (
        <Menu.List.Item renderAs='div' onClick={(e) => e.stopPropagation()}>
            <Form.Field>
                <Form.Control>
                    <Columns multiline breakpoint='mobile'>
                        <Columns.Column>
                            {brandName} 
                        </Columns.Column>
                        <Columns.Column display='flex' justifyContent='flex-end'>
                            <Form.Checkbox/>
                        </Columns.Column>
                    </Columns>
                </Form.Control>
            </Form.Field>
        </Menu.List.Item>
    )
}

BrandSlug.propTypes = {
    brandName: PropTypes.string.isRequired
};

function ItemSlug({itemName, brands}) {

    const [itemIsVisible, setitemIsVisible] = useState(false);
    const menuOnClick = () => setitemIsVisible(!itemIsVisible)

    return (
        <Menu.List.Item renderAs='div'>
            <Panel.Block
                onClick={menuOnClick}
            >
                <Columns.Column>
                    <Button text onClick={menuOnClick}>
                        {itemName}
                    </Button>
                    <Menu.List className={(itemIsVisible) ? '' : 'is-hidden'}>
                        {brands.map((brand) => <BrandSlug brandName={brand} key={brand} />)}
                    </Menu.List>
                </Columns.Column>
            </Panel.Block>
        </Menu.List.Item>
    )
}

ItemSlug.propTypes = {
    itemName: PropTypes.string.isRequired,
    brands: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ItemSlug