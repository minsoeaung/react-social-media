import './Login.css'
import {useContext, useRef, useState} from "react";
import loginUser from "../../api/loginUser";
import {AuthContext} from "../../context/AuthContext";
import {Alert, CircularProgress, Snackbar} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const {isFetching, error, dispatch} = useContext(AuthContext)
    const [err, setErr] = useState(false)

    async function handleLogin(e) {
        e.preventDefault()
        await loginUser({
            email: email.current.value,
            password: password.current.value
        }, dispatch)
        if (error) {
            setErr(true)
        } else {
            navigate('/')
            window.location.reload()
        }
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-body">
                    <Snackbar open={err} autoHideDuration={6000} onClose={() => setErr(false)}
                              anchorOrigin={{vertical: "top", horizontal: "center"}}>
                        <Alert onClose={() => setErr(false)} severity="warning">
                            Incorrect Username or Email!
                        </Alert>
                    </Snackbar>
                    <div className="title">React Social</div>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" ref={email} required/>
                        <input type="password" placeholder="Password" ref={password} min={6} required/>
                        <button disabled={isFetching} type='submit'>
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