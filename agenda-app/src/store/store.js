import { createStore, applyMiddleware } from "redux"
import agenda from "../reducers/agenda"
import thunk from "redux-thunk"

export default () => {
    return createStore(agenda, applyMiddleware(thunk));
}