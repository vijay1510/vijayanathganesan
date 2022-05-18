import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./Reducer";
//import { loadState, saveState } from "./LocalStorage";

//const persistedState = loadState();

const store = createStore(
  reducer,

  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

// store.subscribe(() => {
//   saveState(store.getState());
//});

export default store;
