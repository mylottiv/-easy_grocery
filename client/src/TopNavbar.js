import { Navbar, Heading, Button } from 'react-bulma-components';
import './App.css';

function TopNavbar() {
    return (
        <Navbar>
            <Navbar.Brand>
            <Navbar.Item href='#'>
                <Heading weight='bold' size={3}>
                    EZ-Grocery
                </Heading>
            </Navbar.Item>
            <Navbar.Item>
                <Button color='link'>
                    Login
                </Button>
            </Navbar.Item>
            <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
            {/* <Navbar.Container>
            </Navbar.Container> */}
            </Navbar.Menu>
        </Navbar>)
}

export default TopNavbar