import React from 'react'
import { connect } from 'react-redux';

class Msg extends React.Component {
    constructor (props) {
        super (props);
        console.info('props');
        console.info(props);

        this.state = {
            msg: 'Hello Wold',
        };
        this.change = this.change.bind(this);
    }

    change(e) {
//        this.setState({ msg: e.target.value })
        this.props.dispatch({
            type: 'UPDATE_MSG',
            msg: e.target.value
        });
    }

    render () {
        document.title = this.props.msg;

        if(this.props.withInput) {
            return (
                <div className="msg">
                    <span>{this.props.msg}</span>
                    <p>
                        <input onChange={this.change} placeholder={this.props.placeholder || 'new Message'} />
                    </p>
                </div>
            )
        } else {
            return (<span>{this.props.msg}</span>)
        }
    }
}

function mapStateToProps(state) {
    return {
        msg: state.msg
    };
}

// Then replace this:
//export default Msg
// With this:
export default connect(mapStateToProps)(Msg);
