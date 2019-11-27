import React from 'react'
import Select from 'react-select';
import { getAuthors } from "../../data/authors";
import {updateMovie} from "../../data/movies";

class MovieEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {authors:[]};
/*
        this.state = {
            authors: [],
            author_id: 0,
            title: '',
            price: '',
            author: {
                fullname: ''
            },
        }
 */
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getAuthorsData() {
        getAuthors()
            .then((data) => {
                this.setState({authors: data});
                console.info(this.state.authors)
            })
            .catch(err => {
                console.error(err)
            })
    }

    componentDidMount() {
        this.getAuthorsData();
        const formData = $('#frmMovie').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        this.setState(formData)
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
    }

    onSelectChange(e) {
        // for a regular input field, read field name and value from the event
        const fieldName = "author_id";
        const fieldValue = e.value;
        this.onChange(fieldName, fieldValue);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            author_id: this.state.author_id,
            title: this.state.title,
            price: this.state.price,
        };
        console.info(formData);
        // handle for submit here -> API Request

        updateMovie(this.props.location.movie.id, this.state)
            .then((response)=>{
                console.info('update');
                console.info(response)
            }).catch(err => {
            console.info(err)
        })
    }

    render() {
        const movie = this.props.location.movie;
        const options = this.state.authors.map((author) => {
            return { value: author.id, label: author.fullname };
        });
        const defaultValue = {
            value: movie.author.id,
            label: movie.author.fullname,
        };
        return (
            <div>
                <form id="frmMovie" method="post" onSubmit={this.handleSubmit}>
                    <table>
                    <tbody>
                    <tr>
                        <td>Author</td>
                        <td>
                            <Select
                                id="author_id"
                                name="author_id"
                                clearable={false}
                                searchable={true}
                                labelKey='fullname'
                                valueKey='id'
                                options={options}
                                defaultValue={defaultValue}
                                onChange={this.onSelectChange.bind(this)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td><input type="text" id="title" name="title" defaultValue={movie.title} onChange={this.onChange.bind(this)} /></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type="text" id="price" name="price" defaultValue={movie.price} onChange={this.onChange.bind(this)} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button>update</button></td>
                    </tr>
                    </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default MovieEdit
