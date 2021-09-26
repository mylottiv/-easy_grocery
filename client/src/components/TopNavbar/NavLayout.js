import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Heading, Icon } from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faClipboardList, faBoxes, faReceipt, faDoorOpen, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
// Not sure what's up with this import exactly
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
                    <Navbar.Item data-testid='home-nav-link' renderAs={Link} to={(loggedIn) ? '/dashboard' : '/'}>
                            {(loggedIn) ? 'Dashboard' : 'Home'} 
                    </Navbar.Item>
                </Navbar.Container>
                {loggedIn && <Navbar.Container>
                    <Navbar.Item active={activeDropdown}>
                        <span data-testid='navbar-dropdown-button' role='button' onClick={dropdownOnClick} onKeyDown={dropdownOnClick} tabIndex={0}>
                            <Navbar.Link className='is-align-content-center is-inline-flex' arrowless>
                                <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={faClipboardList} /></Icon>
                                <span>List management</span>
                            </Navbar.Link>
                        </span>
                        <Navbar.Dropdown>
                            <div className='is-flex is-flex-direction-column'>
                                <Navbar.Item className='is-align-content-center is-inline-flex is-flex-grow-1' data-testid='inventory-nav-link' renderAs={Link} to='/inventory'>
                                    <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={faBoxes} /></Icon>
                                    <span>Inventory</span>
                                </Navbar.Item>
                                <Navbar.Item className='is-align-content-center is-inline-flex is-flex-grow-1' data-testid='shopping-nav-link' renderAs={Link} to='/shopping'>
                                    <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={faReceipt} /></Icon>
                                    <span>Shopping</span>
                                </Navbar.Item>
                            </div>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                </Navbar.Container>}
                {loggedIn && <Navbar.Container>
                    <Navbar.Item className='is-align-content-center is-inline-flex' data-testid='profile-nav-link' renderAs={Link} to='/profile'>
                        <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={faCog} /></Icon>
                        <span>Profile</span>
                    </Navbar.Item>
                </Navbar.Container>}
                <Navbar.Container>
                    <Navbar.Item className='is-align-content-center is-inline-flex' data-testid='login-nav-link' renderAs={Link} to={(loggedIn) ? '/login' : '/dashboard'}>
                        <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={(loggedIn) ? faDoorOpen : faSignInAlt } /></Icon>
                        <span>{(loggedIn) ? 'Logout' : 'Login'}</span>
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