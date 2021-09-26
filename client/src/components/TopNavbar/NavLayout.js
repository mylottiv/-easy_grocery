import PropTypes from 'prop-types';
import { Navbar, Heading } from 'react-bulma-components';
import Menu from './Menu';
// Not sure what's up with this import exactly
import '../../App.css';

function NavLayout({loggedIn, activeNav, burgerOnClick}) {

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
            <Menu loggedIn={loggedIn} />
        </Navbar>
    )
};

NavLayout.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    activeNav: PropTypes.bool.isRequired,
    burgerOnClick: PropTypes.func.isRequired,
};

export default NavLayout