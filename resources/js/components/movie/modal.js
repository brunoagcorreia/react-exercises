import React from 'react'
import {Modal} from "react-bootstrap";

class MovieModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                id: '',
                title: '',
                price: '',
                author: {
                    fullname: ''
                }
            }
        }
    }

    render() {
        const movie = this.state.movie;
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>{movie.id}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{movie.author.fullname}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{movie.price}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default MovieModal
