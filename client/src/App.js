import React from 'react';
import { Navbar, Heading, Button } from 'react-bulma-components';
import './App.css';

function App() {
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
    </Navbar>
    // <Columns breakpoint='mobile' display='flex' alignItems='stretch' centered vCentered marginless>
    //   <Columns.Column display='flex' alignItems='center' size={6}>
    //     <Heading weight='bold' size={4}>
    //       EZ-Grocery
    //     </Heading>
    //   </Columns.Column>
    //   <Columns.Column display='flex' alignItems='center' size={3}>
        // <Button color='link'>
        //   Login
        // </Button>
    //   </Columns.Column>
    //   <Columns.Column display='flex' alignItems='center' size={3}>
        // <Icon size='large'>
    //       <img src={logo} alt='hamburger menu'/>
    //     </Icon>
    //   </Columns.Column>
    // </Columns>
  )
}

export default App;
