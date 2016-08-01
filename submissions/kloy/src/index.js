import React from 'react';
import { render } from 'react-dom';
import Root from './components/root';
import createStore from './create-store';
import './index.css';

const store = createStore();
const rootNode = document.getElementById('root');
const rootElement = <Root store={store} />;

render(rootElement, rootNode);
