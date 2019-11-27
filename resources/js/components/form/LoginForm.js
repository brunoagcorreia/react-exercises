
import React from "react"
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import ButtonField from "./fields/ButtonField";
import MyStore from "../../inc/constants";
import {connect} from "react-redux";


class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: "",
            },
            auth: null,
        };
//        const csurf = require('csurf')
        this.csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        console.info(this.state.form);
        axios.post(apiURL + '/login', {params: this.state.form, headers: {'X-CSRF-Token': this.csrfToken}})
            .then(response => {
                this.setState({auth: response.data});

                this.props.dispatch({
                    type: MyStore.AUTH,
                    auth: this.state.auth,
                });

//                this.props.history.push(`/home`)
            }).catch(err => {
                console.error(err)
            });
        e.preventDefault()
    }

    onChange(field, value) {
        this.setState( $.extend(this.state.form, {[field]: value}));
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <form id="frmLogin" onSubmit={this.onSubmit}>
                    <input type="hidden" name="_token" value={this.csrfToken} />
                    <EmailField name="email" onChange={this.onChange.bind(this)} />
                    <PasswordField name="password" onChange={this.onChange.bind(this)} />
                    <ButtonField label="Login" type="submit" />
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

//export default LoginForm
export default connect(mapStateToProps)(LoginForm);
