import { Redirect } from 'react-router-dom'

export function getMovies() {
    return iAxios.get('/api/movie')
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}

export function getMovie(id) {
    return iAxios.get('/api/movie/' + id)
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}

export function updateMovie(id, data) {
    return iAxios.put('/api/movie/' + id, data)
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}

export function createMovie(data) {
    return iAxios.post('/api/movie/', data)
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}

export function deleteMovie(id, data) {
    return iAxios.delete('/api/movie/' + id)
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}