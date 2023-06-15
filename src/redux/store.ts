import {combineReducers, compose, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type rootStateType = ReturnType<typeof rootReducer>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers());

// @ts-ignore
window.state = store.getState()