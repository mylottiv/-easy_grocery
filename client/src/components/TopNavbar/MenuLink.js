import {PropTypes} from 'prop-types';
import { Link } from "react-router-dom";
import {Navbar, Icon} from 'react-bulma-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MenuLink({linkName, dataID, linkURL, faIcon}) {
    return (
        <Navbar.Container>
            <Navbar.Item className='is-align-content-center is-inline-flex' data-testid={`${dataID}-menu-link`} renderAs={Link} to={linkURL}>
                <Icon size='small' className='mr-2 my-1'><FontAwesomeIcon icon={faIcon} /></Icon>
                <span>{linkName}</span>
            </Navbar.Item>
        </Navbar.Container>
    )
}

MenuLink.propTypes = {
    linkName: PropTypes.string.isRequired,
    dataID: PropTypes.string.isRequired,
    linkURL: PropTypes.string.isRequired,
    faIcon: PropTypes.PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default MenuLink;