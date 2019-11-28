import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Movies from './Movies'
import MovieShow from "./movie/show";
import Counter from "./Counter";
import LoginForm from "./form/LoginForm";
import {Provider} from "react-redux";
import { createStore } from 'redux';
import MyStore from "../inc/constants";
import UpdateMovieForm from "./form/UpdateMovieForm";
import CreateMovieForm from "./form/CreateMovieForm";

const initialState = {
    auth: null,
    msg: "Msg from Redux",
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case MyStore.AUTH:
            return {
                auth: action.auth
            };
        case MyStore.UPDATE_MSG:
            return {
                msg: action.msg
            };
        default:
            return state;
    }
}
const store = createStore(
    reducer,
    // only for activating firefox add-on "Redux DevTools" if installed
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $("#app").on("storage-ready", () => {
            console.info('auth in main');
            const authToken     = localStorage.getItem('auth_token');
            const authUser      = localStorage.getItem('auth_user');
            const authExpiresIn = localStorage.getItem('auth_expires_in')
        })
    }

    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <div className="container m-2 p-0 col-12">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/login' component={LoginForm} />
                            <Route path='/counter' component={Counter} />
                            <Route path='/movies' component={Movies} />
                            <Route path='/movie/edit/:id' component={UpdateMovieForm} />
                            <Route path='/movie/edit' component={CreateMovieForm} />
                            <Route path='/movie/:id' component={MovieShow} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));
