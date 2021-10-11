import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import Cryptocurrencies from './Cryptocurrencies';
 
const mockStore = configureStore([]);
 
describe('React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample',
    });
 
    component = renderer.create(
      <Provider store={store}>
        <Cryptocurrencies />
      </Provider>
    );
  });
 
  it('Cryptocurrencies rendering with a given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});