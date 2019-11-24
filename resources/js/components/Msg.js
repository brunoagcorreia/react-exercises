import React from 'react'

class Msg extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            msg: 'Hello Wold',
        };
        this.change = this.change.bind(this);
    }

    change(e) {
        this.setState({ msg: e.target.value })
    }

    render () {
        document.title = this.state.msg;

        if(this.props.withInput) {
            return (
                <div className="msg">
                    <span>{this.state.msg}</span>
                    <p>
                        <input onChange={this.change} placeholder={this.props.placeholder || 'new Message'} />
                    </p>
                </div>
            )
        } else {
            return (<span>{this.state.msg}</span>)
        }
    }
}
export default Msg
