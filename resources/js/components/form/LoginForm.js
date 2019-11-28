
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
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        iAxios.post('/api/auth/login', this.state.form)
            .then(response => {
                this.setState({auth: response.data});
                this.props.dispatch({
                    type: MyStore.AUTH,
                    auth: response.data,
                });
//                $("#app").trigger('logged-in', [this.state.auth]);
                console.log('redux auth');
                if(this.props.auth) {
                    console.log('is auth')
                } else {
                    console.log('is NOT auth')
                }


                this.props.history.push('/movies')
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
