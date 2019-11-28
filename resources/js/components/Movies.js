import React from 'react'
import MovieList from "./movie/list";
import MovieModal from "./movie/modal";

class Movies extends React.Component {

    constructor(props) {
        super(props);
        console.info(props)
    }

    render () {
        return (
            <div className="col-12">
                <div className="col">
                    <div className="float-left">
                        <MovieList />
                    </div>
                </div>
            </div>
        )
    }
}
export default Movies

