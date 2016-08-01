import React, { createClass, PropTypes } from 'react';
import { isUndefined, partial, reduce } from 'lodash';

const initAction = '@@secretInitAction';

export const multipleReducerEnhancer = createStore => (reducer, initialState) => {
    const store = createStore(reducer, initialState);

    return {
        ...store,
        addReducer: reducer.addReducer,
        removeReducer: reducer.removeReducer,
        hasReducer: reducer.hasReducer
    };
};

export function createMultipleReducer() {
    const reducers = {};
    var hoistedState = {};

    function addReducer(key, fn, initialState) {
        if (reducers.hasOwnProperty(key)) {
            throw new Error('Key already exists in reducer');
        }

        reducers[key] = partial(fn, initialState);
        const resultingState = reducer(hoistedState, initAction, hoistedState);
        reducers[key] = fn;

        if (isUndefined(resultingState[key])) {
            throw new Error('Returned value from reducer must be defined');
        }

        hoistedState = resultingState;
    }

    function removeReducer(key) {
        delete reducers[key];
        delete hoistedState[key];
    }

    function hasReducer(key) {
        return reducers.hasOwnProperty(key);
    }

    function reducer(state, action, reusedState) {
        const resultingState = reduce(reducers, (acc, childReducer, reducerKey) => {
            acc[reducerKey] = childReducer(state[reducerKey], action);

            return acc;
        }, reusedState || {});
        hoistedState = resultingState;

        return resultingState;
    }

    reducer.addReducer = addReducer;
    reducer.removeReducer = removeReducer;
    reducer.hasReducer = hasReducer;

    return reducer;
}

export const includeReducer = ({ reducer, initialState, persist = true, reducerKey }) => ComposedComponent => {
    return createClass({
        displayName: 'includeReducer',

        propTypes: {
            reducerKey: PropTypes.string
        },

        contextTypes: {
            store: PropTypes.object.isRequired
        },

        componentWillMount() {
            const store = this.context.store;
            const actualReducerKey = this.getReducerKey();

            if (!store.hasReducer(actualReducerKey)) {
                store.addReducer(actualReducerKey, reducer, initialState);
            }
        },

        componentWillUnmount() {
            const store = this.context.store;
            const actualReducerKey = this.getReducerKey();

            if (persist === false) {
                store.removeReducer(actualReducerKey);
            }
        },

        getReducerKey() {
            const reducerKeyProp = this.props.reducerKey;

            return reducerKey || reducerKeyProp;
        },

        render() {
            return <ComposedComponent {...this.props} />;
        }
    });
};
