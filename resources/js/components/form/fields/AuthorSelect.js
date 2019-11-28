import React, { Component } from 'react'
import Select from 'react-select';
import { getAuthors } from '../../../data/authors'

class AuthorSelect extends Component {

    constructor (props) {
        super(props);
        this.state = {
            authors: [],
        }
    }

    componentDidMount () {
        getAuthors()
            .then(response => {
                this.setState({
                    authors: response
                });
                return response
            }).catch(err => {
                console.error("author err: " + err);
                return err;
            })
    }

    handleChange(selectedOption) {
        this.setState({selectedOption});
    }

    onSelectChange(e) {
        // for a regular input field, read field name and value from the event
        const fieldName = "author_id";
        const fieldValue = e.value;
        this.props.onChange(fieldName, fieldValue);
    }

    render () {
        if(!this.state.authors) {
            return (<div><h3>No Authors available!</h3></div>)
        }
        const options = this.state.authors.map(function (author) {
            return { value: author.id, label: author.fullname };
        });
        const defaultValue = {
            value: this.props.defaultValue.id,
            label: this.props.defaultValue.fullname,
        };
        return (
            <div className="form-group row">
                <label htmlFor="author_id" className="col-md-2 col-form-label">Author</label>
                <div className="col-md-10">
                    <Select className="col-md-12 px-1"
                        id="author_id"
                        name="author_id"
                        clearable={this.props.clearable || false}
                        searchable={this.props.searchable || true}
                        labelKey='fullname'
                        valueKey='id'
                        options={options}
                        defaultValue={defaultValue}
                        onChange={this.onSelectChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default AuthorSelect
