import './Login.css'
import {useState} from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #c4c0c0',
    boxShadow: 24,
    p: 4,
};

const Login = () => {
    // controlled form
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    // for sign up modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleLogin() {
        alert(username + " " + password)
        setUsername("")
        setPassword("")
        setEmail("")
    }

    function handleSignUp() {
        alert(username + ", " + email + ", " + password)
        setUsername("")
        setPassword("")
        setEmail("")
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-body">
                    <div className="title">React Social</div>
                    <form>
                        <input type="text" placeholder="Username" value={username}
                               onChange={e => setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <button onClick={handleLogin}>Log in</button>
                    </form>
                    <div className="forget-id">
                        <button>Forget password?</button>
                    </div>
                    <div className="signup">
                        <p>Don't have an account?<span onClick={handleOpen}>Sign up</span></p>
                    </div>
                </div>
            </div>

            {/*  ----------------- sign up modal -----------------------  */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" align="center"
                                    gutterBottom={true}>
                            Sign Up
                        </Typography>
                        <form>
                            <input type="text" placeholder="Username" value={username}
                                   onChange={e => setUsername(e.target.value)}/>
                            <input type="email" placeholder="email" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                            <button onClick={handleSignUp}>Sign Up</button>
                        </form>
                    </Box>
                </Fade>
            </Modal>

        </div>
    )
}

export default Login