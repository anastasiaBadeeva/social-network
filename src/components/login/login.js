import React from "react"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formsControls/formsControls";
import {require} from "../../utils/./validators/vaidators";
import {login} from "../../redux/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../common/formsControls/formsControls.module.css"
const LoginForm = ({handleSubmit,error, captchaUrl})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div> {createField("Email","email",[require],Input)}
                </div>
            <div>
                {createField("Password","password",[require],Input, {type: "password"})}

            </div>
            <div>
                {createField(null,"rememberMe",null,Input, {type: "checkbox"})}remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {
                error && <div className={style.formSummeryError}>
                    {error}
                </div>
            }



            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form : "Login"
})(LoginForm)


const Login = (props)=>{
    const onSubmit = (formData) =>{
    console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return( <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>)

}

const mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth,
    captchaUrl : state.auth.captchaUrl
})
export default connect (mapStateToProps, {login})(Login);