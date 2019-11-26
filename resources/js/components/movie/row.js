import React from 'react'

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
                <td onClick={this.handleClick(movie)}>{movie.title}</td>
                <td>{movie.price}</td>
            </tr>
        )
    }
}