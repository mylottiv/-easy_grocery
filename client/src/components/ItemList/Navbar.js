import {Dropdown, Icon, Level} from 'react-bulma-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Navbar({sections, selectedSection, onChange}) {

    const processedSections = Object.entries(sections).map(
        ([key, {name}]) => (
            <Dropdown.Item renderAs='a' active={(selectedSection === name)} value={name} key={key}>
                {name}
            </Dropdown.Item>
        )
    )

    return ( 
    <Level justifyContent='center' className='mt-4 mb-0' breakpoint='mobile'>
        <Dropdown
            closeOnSelect
            icon={<Icon size='small'><FontAwesomeIcon icon={faAngleDown} /></Icon>}
            onChange={onChange}
            label={selectedSection}
        >
            {processedSections}
        </Dropdown>
    </Level>
    )
}

Navbar.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
    selectedSection: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Navbar;