//@flow
import {
    combineReducers,
} from 'redux';
import {
    reducer as reducerMain,
    NAME_SPACE as namespaceMain,
} from 'Components/Main';

const reducers = {
    [namespaceMain]: reducerMain,
};

export default combineReducers(reducers);