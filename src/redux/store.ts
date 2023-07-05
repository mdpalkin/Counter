import {combineReducers, compose, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

// Access to data from localStorage
let preloaderState
const savedState = localStorage.getItem("app-state")
if (savedState) {
    preloaderState = JSON.parse(savedState)
}

export const store = legacy_createStore(rootReducer, preloaderState);
export type rootStateType = ReturnType<typeof rootReducer>

// LocalStorage listener
store.subscribe(() => {
    const currentState = JSON.stringify(store.getState())
    localStorage.setItem("app-state", currentState)
})

// @ts-ignore
window.state = store.getState()