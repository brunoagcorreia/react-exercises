import RootStore from "./store/root-store";

require('./bootstrap');

//window.apiURL = "http://videostore.loc";
window.loginTime = null;

window.axios = require('axios');
window.iAxios = window.axios.create({
    ...window.axios.defaults,
    baseURL: 'http://videostore.loc',
    headers: {
        ...window.axios.defaults.headers,
        common: {
            ...window.axios.defaults.headers.common,
            "X-Requested-With": "XMLHttpRequest",
        }
    },
    timeout: 5000,
    responseType: 'json',
    withCredentials: false,
    maxRedirects: 5,
});

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux'
import rootStore from './store/root-store'

console.log('rootStore');
console.log(rootStore.getState());

ReactDOM.render(
    <Provider store={rootStore}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
