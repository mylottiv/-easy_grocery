import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Inventory from './Inventory';

it('renders inventory page panel component & dummy items', () => {
  render(
    <Provider store={store} >
      <Inventory />
    </Provider>
  );
  expect(screen.getByText("Inventory")).toBeInTheDocument();
  expect(screen.getByText("Items")).toBeInTheDocument();
});