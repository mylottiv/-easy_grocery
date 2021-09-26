import { screen } from '@testing-library/react';
import routerRender from '../../testingUtils/routerRender';
import Menu from './Menu';

it('Navigation Links work (not logged in)', () => {
    routerRender(<Menu 
      loggedIn={false}
      />);
    // This link especially shouldn't be handled with a literal
    expect(screen.getByTestId("home-menu-link").href).toBe("http://localhost/");
    expect(screen.getByTestId("login-menu-link").href).toBe("http://localhost/login");
})
  
it('Navigation Links work (logged in)', () => {
    routerRender(<Menu 
        loggedIn
        />);
    expect(screen.getByTestId("home-menu-link").href).toBe("http://localhost/dashboard");
    expect(screen.getByTestId("inventory-menu-link").href).toBe("http://localhost/inventory");
    expect(screen.getByTestId("shopping-menu-link").href).toBe("http://localhost/shopping");
    expect(screen.getByTestId("profile-menu-link").href).toBe("http://localhost/profile");
    expect(screen.getByTestId("logout-menu-link").href).toBe("http://localhost/login");
})