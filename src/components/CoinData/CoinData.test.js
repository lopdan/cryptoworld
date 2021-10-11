import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import CoinData from './CoinData';
 
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
        <CoinData />
      </Provider>
    );
  });
 
  it('CoinData rendering with a given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});