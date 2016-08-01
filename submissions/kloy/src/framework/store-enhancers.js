import { Subject } from './rx';

export function createDevtoolsExtension(createStore) {
    if (window.devToolsExtension) {
        return window.devToolsExtension();
    }

    return createStore;
}

export const observableEnhancer = createStore => (reducer, initialState) => {
    const store = createStore(reducer, initialState);
    const store$ = new Subject();

    function dispatch(action) {
        const dispatched = store.dispatch(action);
        const state = store.getState();
        store$.next({action, state});
        return dispatched;
    }

    return {
        ...store,
        dispatch,
        store$: store$.share()
    };
};
