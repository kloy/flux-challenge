import { createStore as reduxCreateStore, compose } from 'redux';
import { createDevtoolsExtension, observableEnhancer } from './framework/store-enhancers';
import { multipleReducerEnhancer, createMultipleReducer } from './framework/multiple-reducer';

export default function createStore() {
    const devToolsExtension = createDevtoolsExtension();
    const storeEnhancers = compose(
        multipleReducerEnhancer,
        devToolsExtension,
        observableEnhancer
    );
    const reducer = createMultipleReducer();
    const initialState = {};
    const store = reduxCreateStore(reducer, initialState, storeEnhancers);

    return store;
}
