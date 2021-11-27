import './SignUp.css'
import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import signUpUser from "../../api/signUpUser";
import {Alert, CircularProgress, Snackbar} from "@mui/material";

const SignUp = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSignUp(e) {
        e.preventDefault()
        if (confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity("Passwords don't match!")
        } else {
            setIsLoading(true)
            const userData = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            const res = await signUpUser(userData)
            if (res.status === 200) {
                setIsSuccess(true)
                setTimeout(() => {
                    navigate('/login');
                }, 1000)
            } else {
                setIsError(true)
            }
            setIsLoading(false)
        }
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-body">
                    <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)}
                              anchorOrigin={{vertical: "top", horizontal: "center"}}>
                        <Alert onClose={() => setIsError(false)} severity="warning">
                            Username or Email is already taken!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={isSuccess} autoHideDuration={6000} onClose={() => setIsSuccess(false)}
                              anchorOrigin={{vertical: "top", horizontal: "center"}}>
                        <Alert onClose={() => setIsSuccess(false)} severity="success">
                            Success, You can now login!
                        </Alert>
                    </Snackbar>
                    <div className="title">React Social</div>
                    <form onSubmit={handleSignUp}>
                        <input type="text" placeholder="Username" ref={username} minLength={3} maxLength={20} required/>
                        <input type="email" placeholder="Email" ref={email} required/>
                        <input type="password" placeholder="Password" ref={password} minLength={6} required/>
                        <input type="password" placeholder="Confirm Password" ref={confirmPassword} minLength={6}
                               required/>
                        <button type='submit'>
                            {isLoading ? <CircularProgress size={12} color="info" thickness={10}/> : "Sign up"}
                        </button>
                    </form>
                    <div className="signup-footer">
                        <p>Have an account?<Link to='/login' className="login-link">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp