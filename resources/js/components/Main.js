import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Movies from './Movies'
import MovieShow from "./movie/show";
import Counter from "./Counter";

class Main extends Component {
    render () {
        return (
            <BrowserRouter>
                <Header />
                <div className="container m-2 p-0 col-12">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/counter' component={Counter} />
                        <Route path='/movies' component={Movies} />
                        <Route path='/movie/:id' component={MovieShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));
