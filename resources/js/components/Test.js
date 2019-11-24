import React, { Component } from 'react'

class Test extends Component {
    constructor () {
        super ();

        this.state = {
            msg: 'Hello Wold',
            now: '',
            iID: null,
        };
        this.timer  = this.timer.bind(this);
        this.change = this.change.bind(this);
    }

    timer () {
        this.setState({now: (new Date()).toLocaleTimeString()});
    }
    change(e) {
        this.setState({ msg: e.target.value })
    }
    componentDidMount () {
        this.state.iID = setInterval(() => this.timer(this), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.state.iID);
    }

    render () {
        document.title = this.state.msg;
        return (
            <div className="col-12">
                <div className="col">
                    <div className="float-left">
                        <p>Time: {this.state.now}</p>
                        <p>msg: {this.state.msg}</p>
                        <input id="msg" type="text" onChange={this.change} placeholder="new Message" />
                    </div>
                </div>
                <div className="col">
                    <div className="float-right">
                        <h1>{this.state.msg}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Test
