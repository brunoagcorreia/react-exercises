import React from 'react'
import {getMovies} from "../../data/movies";
import MovieRow from "./row";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
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

    render () {
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
                    {this.state.movies.map((movie) => {
                        return (
                            <MovieRow key={movie.id} movie={movie}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MovieList
