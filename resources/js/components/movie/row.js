import React from 'react'
import {Link} from "react-router-dom";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);
    }
    handleClick() {
    }
    render() {
        let movie = this.props.movie;
        return (
            <tr>
                <td>{movie.id}</td>
                <td>{movie.author.fullname}</td>
                <td>
                    <Link to={{
                        pathname: `/movie/${movie.id}`,
                        movie: movie,
                    }}
                    >{movie.title}</Link>
                </td>
                <td>{movie.price}</td>
            </tr>
        )
    }
}
export default MovieRow