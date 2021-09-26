import {useState} from 'react';
import PropTypes from 'prop-types';
import NavLayout from './NavLayout';

function TopNavbar({loggedIn}) {

    const [navbarIsActive, setNavbarIsActive] = useState(false);

    return (
        <>
            <NavLayout 
                loggedIn={loggedIn}
                activeNav={navbarIsActive}
                burgerOnClick={() => setNavbarIsActive(!navbarIsActive)}
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