import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.startWert || 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if( this.state.count == 5 ) {
            $("#app").trigger('counter-alarm', [{count: this.state.count}]);
            console.info('counter-alarm trigger')
        }
        else {
            $("#app").off('counter-alarm', {
                count: this.state.count
            });
            console.info('counter-alarm off')
        }
    }

    increment() {
        this.setState({
            count: (this.props.multiplicator) ? (this.state.count + 1) * this.props.multiplicator : this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count:  this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>

                <button onClick={this.increment} className="btn btn-primary font-weight-bolder">+ plus</button>
                <button onClick={this.decrement} className="btn btn-danger  font-weight-bolder ml-1">- minus</button>
            </div>
        )
    }
}
export default Counter
