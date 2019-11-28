import { Redirect } from 'react-router-dom'

export function getAuthors() {
    return iAxios.get('/api/author')
        .then(response => {
            return response.data
        }).catch(err => {
            if(err.response && 401 == err.response.status) {
                return (<Redirect to="/" />)
            }
        })
}
