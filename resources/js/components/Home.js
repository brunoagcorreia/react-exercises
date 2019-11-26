import React from 'react'
import {Provider} from "react-redux";
import { createStore } from 'redux';
import Msg from "./Msg";
import MyStore from "../inc/constants";

const initialState = {
    msg: "Message from redux store",
};
function reducer(state = initialState, action) {
    if(action.type === MyStore.UPDATE_MSG) {
        return {
            msg: action.msg
        };
    }
    return state;
}
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Home extends React.Component {

    render () {
        return (
            <Provider store={store}>
                <div className="col-12">
                    <div className="col">
                        <div className="float-left">
                            <Msg withInput placeholder="Schreib was rein"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <h1><Msg/></h1>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default Home
