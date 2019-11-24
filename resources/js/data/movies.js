
export function getMovies() {
    return axios.get(apiUrl + '/api/movie')
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}
