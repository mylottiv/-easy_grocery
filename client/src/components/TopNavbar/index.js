import {useState} from 'react';
import PropTypes from 'prop-types';
import NavLayout from './NavLayout';

function TopNavbar({loggedIn}) {

    const [navbarIsActive, setNavbarIsActive] = useState(false);
    const [dropdownIsActive, setDropdownIsActive] = useState(false);

    return (
        <>
            <NavLayout 
                loggedIn={loggedIn}
                activeNav={navbarIsActive}
                activeDropdown={dropdownIsActive}
                burgerOnClick={() => setNavbarIsActive(!navbarIsActive)}
                dropdownOnClick={() => setDropdownIsActive(!dropdownIsActive)} 
            />
        </>
    )
};

TopNavbar.defaultProps = {
    loggedIn: false
};

TopNavbar.propTypes = {
    loggedIn: PropTypes.bool
};

export default TopNavbar;