import React from 'react'
import MovieRow from "./row";
import { Redirect } from 'react-router-dom'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            mustLogin: false,
        };
        this.getMovieList = this.getMovieList.bind(this)
    }
    componentDidMount() {
        this.getMovieList()
    }

    getMovieList () {
        iAxios.get('/api/movie')
            .then(response => {
                if (response.data) {
                    this.setState({
                        movies: response.data
                    })
                }
            }).catch(error => {
                if(error.response && 401 == error.response.status) {
                    this.setState({mustLogin: true})
                }
            })
    }

    render() {
        if(this.state.mustLogin) {
            return (<Redirect to='/login' />)
        } else {
            return (
                <div>
                    <div className="col float-right text-right" style={{ marginBottom:'10px' }}>
                        <Link className="btn btn-primary" to={{
                            pathname: `/movie/edit`,
                        }}
                        >Create Movie</Link>
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th colSpan="2">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.state.movies.length > 0 ? (
                            this.state.movies.map(movie => {
                                return (<MovieRow key={movie.id} movie={movie}/>)
                            })) : (<></>)
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
//export default MovieList
const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};
export default connect(mapStateToProps)(MovieList);
