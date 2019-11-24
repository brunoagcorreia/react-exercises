
export function getAuthors() {
    return axios.get(apiURL + '/api/author')
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        })
}
