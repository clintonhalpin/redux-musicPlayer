export const thunk = store => next => action => {
  if (typeof action !== 'function') {
    return next(action);
  }
  const result = action(store.dispatch, store.getState);
  return result;
};

export const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};