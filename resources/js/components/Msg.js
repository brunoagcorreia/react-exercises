import React from 'react'
import { connect } from 'react-redux'
import MyStore from '../inc/constants'

class Msg extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            msg: 'Hallo Welt',
        };
        this.change = this.change.bind(this)
    }

    change(e) {
        this.setState({ msg: e.target.value });
        this.props.dispatch({
            type: MyStore.UPDATE_MSG,
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
