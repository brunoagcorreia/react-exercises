import React from 'react'
import Msg from "./Msg";
import Time from "./Time";
import Counter from "./Counter";

class Home extends React.Component {

    componentDidMount() {
        $('#app').on('counter-alarm', function (evt, {count}) {
            $('#zähler').css({color:'#f00'}).html('Zähler Alarm');
            console.info('counter-alarm listener');
            console.info(count);
        });
    }

    render () {
        return (
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
        )
    }
}
export default Home
