import { createStore } from 'redux';
import MyStore from "../inc/constants";

const initialState = {
    auth: null,
    msg: "Msg from Redux",
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case MyStore.AUTH:
            iAxios = axios.create({
                ...iAxios.defaults,
                headers: {
                    ...iAxios.defaults.headers,
                    common: {
                        ...iAxios.defaults.headers.common,
                        'Authorization': 'Bearer ' + action.auth.access_token,
                    }
                },
            });
            return {
                auth: action.auth
            };
        case MyStore.UPDATE_MSG:
            return {
                msg: action.msg
            };
        default:
            return state;
    }
}

const rootStore = createStore(
    reducer,
    // only for activating firefox add-on "Redux DevTools" if installed
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore
