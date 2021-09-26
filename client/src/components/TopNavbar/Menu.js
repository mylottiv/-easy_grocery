import PropTypes from 'prop-types';
import { Navbar } from 'react-bulma-components';
import { faCog, faClipboardList, faBoxes, faDoorOpen, faSignInAlt, faColumns, faHome } from '@fortawesome/free-solid-svg-icons'
import MenuLink from './MenuLink'

function Menu({loggedIn}) {
    return (
        <Navbar.Menu>
            <MenuLink 
                linkName={(loggedIn) ? 'Dashboard' : 'Home'} 
                dataID='home' 
                linkURL={(loggedIn) ? '/dashboard' : '/'} 
                faIcon={(loggedIn) ? faColumns : faHome} 
            />
            {loggedIn && <>
                <MenuLink 
                    linkName='Inventory'
                    dataID='inventory'
                    linkURL='/inventory'
                    faIcon={faBoxes}
                />
                <MenuLink 
                    linkName='Shopping'
                    dataID='shopping'
                    linkURL='/shopping'
                    faIcon={faClipboardList}
                />
                <MenuLink 
                    linkName='Profile'
                    dataID='profile'
                    linkURL='/profile'
                    faIcon={faCog}
                />
            </>}
            <MenuLink 
                linkName={(loggedIn) ? 'Logout' : 'Login'}
                dataID={(loggedIn) ? 'logout' : 'login'}
                linkURL='/login'
                faIcon={(loggedIn) ? faDoorOpen : faSignInAlt }
            />
        </Navbar.Menu>
    )
}

Menu.propTypes = {
    loggedIn: PropTypes.bool.isRequired
}

export default Menu