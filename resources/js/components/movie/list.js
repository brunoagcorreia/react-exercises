import React from 'react'
import {getMovies} from "../../data/movies";
import MovieShow from "./show";
import {Link, NavLink} from "react-router-dom";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movie: null,
            modal: false,
        };
        this.handleClick = this.handleClick.bind(this)
    }

    getMovieList () {
        getMovies()
            .then(movies => {
                this.setState({
                    movies: movies
                })
            }).catch(err => {
                console.error(err)
        });
    }

    componentDidMount() {
        this.getMovieList()
    }

    handleClick (e) {
        let index = e.target.dataset.index;
        let movie = this.state.movies[index];
        console.info(this.state.movies[index].title);
        this.setState({
            movie: movie,
            modal: true,
        });
    }

    render () {
        var rows= [];
        this.state.movies.forEach((movie, index) => {
            rows.push(
                (<tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.author.fullname}</td>
                    <td><Link to={'/movie/' + movie.id}>{movie.title}</Link></td>
                    <td>{movie.price}</td>
                </tr>)
            );
        });

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MovieList
