import React, { createClass, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = createClass({
    displayName: 'Root',

    propTypes: {
        store: PropTypes.object.isRequired
    },

    render() {
        const store = this.props.store;

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
});

export default Root;
