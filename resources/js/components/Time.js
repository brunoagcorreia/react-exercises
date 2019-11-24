import React from 'react'

class Time extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            now: '',
            iID: null,
        };
        this.timer  = this.timer.bind(this);
    }

    timer () {
        this.setState({now: (new Date()).toLocaleTimeString()});
    }

    componentDidMount () {
        this.state.iID = setInterval(() => this.timer(this), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.state.iID);
    }

    render () {
        return (
            <span className="time">{this.props.preText || ''} {this.state.now} {this.props.afterText || ''}</span>
        )
    }
}
export default Time
