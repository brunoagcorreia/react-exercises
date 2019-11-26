import React from 'react'
import {Provider} from "react-redux";
import { createStore } from 'redux';
import Msg from "./Msg";
import MyStore from "../inc/constants";
import Time from "./Time";
import Counter from "./Counter";

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
    // only for activating firefox add-on "Redux DevTools" if installed
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Home extends React.Component {

    componentDidMount() {
        $('#app').on('counter-alarm', function (evt) {
            $('#zähler').css({color:'#f00'}).html('Zähler Alarm');
            console.info('counter-alarm listener');
            console.info(evt);

        });
    }

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
                            <h1><Msg /></h1>
                            <h1><Time/></h1>
                            <Counter />
                        </div>
                        <h1 id="zähler">Zähler</h1>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default Home
