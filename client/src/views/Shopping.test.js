import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Shopping from './Shopping';

it('renders inventory page panel component & dummy items', () => {
  render(
  <Provider store={store}>
    <Shopping />
  </Provider>
  );
  expect(screen.getByText("Shopping List")).toBeInTheDocument();
  expect(screen.getByText("Items")).toBeInTheDocument();
});