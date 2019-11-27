import React from 'react'
import { getMovie } from '../../data/movies'

class MovieShow extends React.Component {
    constructor(props) {
        super(props);

        console.info(props);

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
/*
    getMovieData() {
        getMovie(this.props.match.params.id)
            .then((data) => {
                this.setState({movie: data.movie})
            })
            .catch(err => {
                console.error(err)
            })
    }

    componentDidMount() {
        this.getMovieData()
    }
*/
    render() {
        const movie = this.props.location.movie;
        return (
            <div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{movie.id}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{movie.title}</td>
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
            </div>
        )
    }
}
export default MovieShow
