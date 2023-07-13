import { legacy_createStore as  createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from 'history';
import { signupReducer } from "./SignupReducer";
import thunk from "redux-thunk";
import { loginReducer } from "./LoginReducer";
import {setCurrentUser, setToken} from './LoginActions'
import { isEmpty } from "./Helpers";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory()
});

export const store = createStore(
  combineReducers({
    router: routerReducer,
    createUser: signupReducer,
    auth: loginReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware)
  )
);

if (!isEmpty(localStorage.getItem("token"))) {
  store.dispatch(setToken(localStorage.getItem("token")));
}
if (!isEmpty(localStorage.getItem("user"))) {
  const user = JSON.parse(localStorage.getItem("user"));
  store.dispatch(setCurrentUser(user, ""));
}

export const history = createReduxHistory(store);