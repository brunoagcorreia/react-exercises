
export function getAuthors() {
    return axios.get(apiUrl + '/api/author')
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}
