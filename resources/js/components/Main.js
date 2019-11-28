import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Movies from './Movies'
import MovieShow from "./movie/show";
import Counter from "./Counter";
import LoginForm from "./form/LoginForm";
import {connect, Provider} from "react-redux";
import UpdateMovieForm from "./form/UpdateMovieForm";
import CreateMovieForm from "./form/CreateMovieForm";

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render () {
        return (
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
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
export default connect(mapStateToProps)(Main);

//ReactDOM.render(<Main />, document.getElementById('app'));
