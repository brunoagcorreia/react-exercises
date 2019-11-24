import React from 'react'
import Msg from "./Msg";

class Home extends React.Component {

    render () {
        return (
            <div className="col-12">
                <div className="col">
                    <div className="float-left">
                        <Msg withInput={true} placeholder="Schreib was rein" />
                    </div>
                </div>
                <div className="col">
                    <div className="float-right">
                        <h1><Msg /></h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
