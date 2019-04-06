import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootreducer from './reducers';
import App from './components/App';
import Category from './components/Category';
import './index.css';

const store = createStore(rootreducer);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/category' component={Category} />

        </Switch>
    </BrowserRouter></Provider>, document.getElementById('root'));