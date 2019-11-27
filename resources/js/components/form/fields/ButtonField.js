import React, { Component } from 'react'

class ButtonField extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            label: this.props.label,
            type: this.props.type,
        }
    }
    render() {
        return (
            <div className="form-group row mb-0">
                <div className="col-md-4 my-3">
                    <button type={this.state.type || 'button'} className="btn btn-primary col-md-12">
                        {this.state.label}
                    </button>
                </div>
            </div>
        )
    }
}
export default ButtonField
