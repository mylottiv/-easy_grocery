import { render } from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';

const routerRender = (testComponent) => render(<Router>{testComponent}</Router>);

export default routerRender;
