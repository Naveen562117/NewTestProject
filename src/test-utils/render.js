import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

export function withProviders(component, { initialState, networkService, demoMode } = {}) {
  const store = configureStore({ initialState, networkService, demoMode });
  return <Provider store={store}>{component}</Provider>;
}
