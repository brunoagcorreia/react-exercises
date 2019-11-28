require('./bootstrap');

//window.apiURL = "http://videostore.loc";
window.loginTime = null;

window.axios = require('axios');
window.iAxios = window.axios.create({
    ...window.axios.defaults,
    baseURL: 'http://videostore.loc',
    headers: {
        ...window.axios.defaults.headers,
        common: {
            ...window.axios.defaults.headers.common,
            "X-Requested-With": "XMLHttpRequest",
        }
    },
    timeout: 5000,
    responseType: 'json',
    withCredentials: false,
    maxRedirects: 5,
});

$("#app").on("logged-in", (evt, data) => {
    console.info("on logged-in");
    let loginTime = (new Date()).getTime();

    console.info(data);
    localStorage.setItem('auth_expires_in', data.expires_in);
    localStorage.setItem('auth_token', data.access_token);
    localStorage.setItem('auth_user', data.user.name);

    window.iAxios = axios.create({
        ...window.iAxios.defaults,
        headers: {
            ...window.iAxios.defaults.headers,
            common: {
                ...window.iAxios.defaults.headers.common,
                'Authorization': 'Bearer ' + data.access_token,
            }
        },
    });
    $("#app").trigger("storage-ready", [iAxios])
});

export default window.iAxios

require('./components/Main');
