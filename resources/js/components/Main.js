import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Test from './Test'

class Main extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Header />
                <div className="container m-2 p-0 col-12">
                    <Switch>
                        <Route exact path='/' component={Test} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));
