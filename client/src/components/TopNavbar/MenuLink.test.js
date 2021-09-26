import { screen } from '@testing-library/react';
// This method is less headscratching than mocking an icon component
import { faHome } from '@fortawesome/free-solid-svg-icons'
import routerRender from '../../testingUtils/routerRender';
import MenuLink from './MenuLink';

const testIcon = faHome

it('renders MenuLink correctly given dummy values', () => {
  routerRender(<MenuLink 
    linkName='Home'
    dataID='home' 
    linkURL='/home'
    faIcon={testIcon} 
/>);
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByTestId("home-menu-link")).toBeInTheDocument();
  expect(screen.getByTestId("home-menu-link").href).toBe('http://localhost/home');
});

