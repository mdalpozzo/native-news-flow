//@flow
import {
    createStore,
    applyMiddleware,
} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

const composeWithEnhancers = composeWithDevTools({});

export default createStore(reducer, {}, composeWithEnhancers(applyMiddleware(thunk)));