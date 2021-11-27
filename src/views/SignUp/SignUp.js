import './SignUp.css'
import {useRef} from "react";
import {Link} from "react-router-dom";

const SignUp = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    // const {user, isFetching, error, dispatch} = useContext(AuthContext)

    function handleSignUp(e) {
        e.preventDefault()
        console.log("username: " + username.current.value)
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="signup-body">
                    <div className="title">React Social</div>
                    <form onSubmit={handleSignUp}>
                        <input type="text" placeholder="Username" ref={username} required/>
                        <input type="email" placeholder="Email" ref={email} required/>
                        <input type="password" placeholder="Password" ref={password} required/>
                        <input type="password" placeholder="Confirm Password" ref={confirmPassword} min={6} required/>
                        <button>
                            {/*{isFetching ? <CircularProgress size={12} color="info" thickness={10}/> : "Log in"}*/}
                            Sign up
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