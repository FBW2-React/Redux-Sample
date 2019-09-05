import { combineReducers, createStore } from 'redux';

// actions.js
export const activateTarget = target => ({
  type: 'ACTIVATE_TARGET',
  target,
});

export const closeTarget = () => ({
  type: 'CLOSE_TARGET',
});

// reducers.js
export const target = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_TARGET':
      return action.target;
    case 'CLOSE_TARGET':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  target,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
