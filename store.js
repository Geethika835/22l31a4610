import { useState } from "react";
import logger from "./logger";
export function createStore(reducer, initialState, middleware) {
  let state = initialState;
  const listeners = [];
  const store = {
    getState: () => state,
    dispatch: (action) => {
      const next = (act) => {
        state = reducer(state, act);
        listeners.forEach((l) => l());
        return action;
      };
      return middleware(store)(next)(action);
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => listeners.filter((l) => l !== listener);
    },
  };
  return store;
}
function itemsReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
}
export const store = createStore(itemsReducer, [], logger);
export function useStore() {
  const [, setRender] = useState(0);
  const forceUpdate = () => setRender((c) => c + 1);
  store.subscribe(forceUpdate);
  return [store.getState(), store.dispatch];
}