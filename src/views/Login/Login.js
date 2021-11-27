import './Login.css'
import {useContext, useRef} from "react";
import loginUser from "../../api/loginUser";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {
    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault()
        loginUser({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-body">
                    <div className="title">React Social</div>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" ref={email} required/>
                        <input type="password" placeholder="Password" ref={password} min={6} required/>
                        <button disabled={isFetching}>
                            {isFetching ? <CircularProgress size={12} color="info" thickness={10}/> : "Log in"}
                        </button>
                    </form>
                    <div className="forget-id">
                        <button>Forget password?</button>
                    </div>
                    <div className="login-footer">
                        <p>Don't have an account?<Link to='/signup' className="signup-link">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login