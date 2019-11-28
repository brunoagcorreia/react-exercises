import React from "react"
import AuthorSelect from "./fields/AuthorSelect";
import TextField from "./fields/TextField";
import ButtonField from "./fields/ButtonField";
import {createMovie} from "../../data/movies";

class CreateMovieForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            author_id: '',
            title: '',
            price: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        createMovie(this.state)
            .then(response => {
                console.info(response);
                // todo: handle validation errors from API response
                if(response && response.errors) {
                    this.setState({
                        errors: response.errors,
                        messages: response.messages,
                    });

                }
//                this.props.history.push(`/movies`)
            }).catch(err => {
                console.error(err)
        });
        e.preventDefault()
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
    }
    render() {
        const author = {
            id: 0,
            fullname: '',
        };

        return (
                <div>
                    <h3>Create Movie Form</h3>
                    <form id="frmMovie" name="frmMovie" onSubmit={this.onSubmit}>
                        <AuthorSelect
                            defaultValue={author}
                            onChange={this.onChange.bind(this)}
                        />
                        <TextField name="title" onChange={this.onChange.bind(this)} />
                        <TextField name="price" onChange={this.onChange.bind(this)} />
                        <ButtonField label="Save" type="submit" />
                    </form>
                </div>
            )
     }
}

export default CreateMovieForm
