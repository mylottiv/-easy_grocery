import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Heading } from 'react-bulma-components';
import '../../App.css';

function NavLayout({loggedIn, activeNav, activeDropdown, burgerOnClick, dropdownOnClick}) {

    return (
        <Navbar active={activeNav} fixed="top" transparent>
            <Navbar.Brand className='is-justify-content-space-between'>
                <Navbar.Item href='#'>
                    <Heading weight='bold' size={3}>
                        EZ-Grocery
                    </Heading>
                </Navbar.Item>
                <Navbar.Item renderAs='div'>
                    <button type='button' className='hamburger-button' data-testid='burger-button' onClick={burgerOnClick}>
                        <Navbar.Burger />
                    </button>
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item renderAs={Link} to={(loggedIn) ? '/dashboard' : '/'}>
                            {(loggedIn) ? 'Dashboard' : 'Home'} 
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.Item active={activeDropdown}>
                        <span data-testid='navbar-dropdown-button' role='button' onClick={dropdownOnClick} onKeyDown={dropdownOnClick} tabIndex={0}>
                            <Navbar.Link arrowless>
                                List management
                            </Navbar.Link>
                        </span>
                        <Navbar.Dropdown>
                            <Navbar.Item renderAs={Link} to='/inventory'>
                                Inventory
                            </Navbar.Item>
                            <Navbar.Item renderAs={Link} to='/shopping'>
                                Shopping
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.Item renderAs={Link} to={(loggedIn) ? '/profile' : '/login'}>
                        {(loggedIn) ? 'Profile' : 'Login'} 
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
};

NavLayout.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    activeNav: PropTypes.bool.isRequired,
    activeDropdown: PropTypes.bool.isRequired,
    burgerOnClick: PropTypes.func.isRequired,
    dropdownOnClick: PropTypes.func.isRequired
};

export default NavLayout