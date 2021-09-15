import PropTypes from 'prop-types';
import {useState} from 'react';
import { Navbar, Heading, Button } from 'react-bulma-components';
import '../App.css';

function TopNavbar({loggedIn}) {

    const [navbarIsActive, setNavbarIsActive] = useState(false);
    const [dropdownIsActive, setDropdownIsActive] = useState(false);
    const dropdownOnClick = () => {setDropdownIsActive(!dropdownIsActive);}

    return (
        <Navbar active={navbarIsActive} fixed="top" transparent>
            <Navbar.Brand>
                <Navbar.Item href='#'>
                    <Heading weight='bold' size={3}>
                        EZ-Grocery
                    </Heading>
                </Navbar.Item>
                <Navbar.Item>
                    <Button color='link' >
                        {(loggedIn) ? 'Profile' : 'Login'}
                    </Button>
                </Navbar.Item>
                <button type='button' className='hamburger-button' data-testid='burger-button' onClick={() => setNavbarIsActive(!navbarIsActive)}>
                    <Navbar.Burger />
                </button>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item active={dropdownIsActive}>
                        <span data-testid='navbar-dropdown-button' role='button' onClick={dropdownOnClick} onKeyDown={dropdownOnClick} tabIndex={0}>
                            <Navbar.Link arrowless>
                                Vel quam
                            </Navbar.Link>
                        </span>
                        <Navbar.Dropdown>
                            <Navbar.Item href='#'>
                                elementum pulvinar
                            </Navbar.Item>
                            <Navbar.Item href='#'>
                                etiam non quam
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>)
}

TopNavbar.defaultProps = {
    loggedIn: false
  }

  TopNavbar.propTypes = {
    loggedIn: PropTypes.bool
  }

export default TopNavbar