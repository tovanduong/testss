import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staff } from "./Staff";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Staffs: Staff,
            }),
            applyMiddleware(thunk, logger)
    );
    return store;
}