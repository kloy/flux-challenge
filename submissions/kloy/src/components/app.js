import React, { createClass, PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import List from './list';
import PlanetMonitor from './planet-monitor';
import { includeReducer } from '../framework/multiple-reducer';
import { appReducer as reducer } from '../reducers';

const App = createClass({
    displayName: 'App',

    propTypes: {
        bar: PropTypes.string.isRequired
    },

    render() {
        return (
            <div className="app-container">
                <h1>{this.props.bar}</h1>
                <div className="css-root">
                    <PlanetMonitor />
                    <List />
                </div>
            </div>
        );
    }
});

const selector = state => ({
    bar: state.app.bar
});
const composedComponent = compose(
    includeReducer({
        reducer,
        reducerKey: 'app'
    }),
    connect(selector)
);

export default composedComponent(App);
