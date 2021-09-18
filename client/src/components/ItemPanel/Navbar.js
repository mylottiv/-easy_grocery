import {Dropdown, Icon, Level} from 'react-bulma-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Navbar({categories, selectedCategory, onChange}) {

    return ( 
    <Level justifyContent='center' className='mt-4 mb-0' breakpoint='mobile'>
        <Dropdown
            closeOnSelect
            icon={<Icon size='small'><FontAwesomeIcon icon={faAngleDown} /></Icon>}
            onChange={onChange}
            label={`Category: ${selectedCategory}`}
        >
            {categories.filter((key) => !['variables', 'Shopping'].includes(key)).map(
                (tabName) => (
                    <Dropdown.Item renderAs='a' active={(selectedCategory === tabName)} value={tabName} key={tabName}>
                        {tabName}
                    </Dropdown.Item>
                )
            )}
        </Dropdown>
    </Level>
    )
}

Navbar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Navbar;