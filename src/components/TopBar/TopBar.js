import './TopBar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {useContext, useState} from "react";
import {baseUrl} from "../../shared/baseUrl";
import {
    Alert,
    Avatar,
    Backdrop,
    Badge,
    Box,
    CircularProgress,
    IconButton,
    ListItemIcon,
    MenuItem,
    Snackbar,
    Tooltip
} from "@mui/material";
import {Logout} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import fetchUser from "../../api/fetchUser";

const TopBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    let pathName = location.pathname


    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleProfileClick = () => {
        navigate(`/profile/${user.username}`)
    }

    const handleLogoutClick = () => {
        localStorage.clear()
        window.location.reload()
    }

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setIsSearching(true)
            try {
                const userData = await fetchUser(searchInput, false)
                navigate(`profile/${userData.username}`)
                setSearchInput("")
            } catch (e) {
                setSnackbarOpen(true)
                setSearchInput("")
            }
            setIsSearching(false)
        }
    }

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };


    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <Link to="/">React Social</Link>
            </div>
            <div className="topbar-mid">
                <input
                    type="text"
                    placeholder="Search user..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isSearching}
                />
            </div>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Feed">
                    <IconButton aria-label="New Feed" color="default" onClick={() => navigate('/')}>
                        {pathName === '/'
                            ? <HomeIcon color='primary'/>
                            : <HomeOutlinedIcon/>
                        }
                    </IconButton>
                </Tooltip>
                <Tooltip title="Chat">
                    <IconButton aria-label="Message" color="default" onClick={() => navigate('/chat')}>
                        <Badge color="error">
                            {pathName === '/chat'
                                ? <ChatBubbleOutlinedIcon color='primary'/>
                                : <ChatBubbleOutlineOutlinedIcon/>
                            }
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Account">
                    <IconButton onClick={handleClick}>
                        {user.profilePicture
                            ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                            : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                        }
                    </IconButton>
                </Tooltip>
            </Box>

            {/*  MUI menu to show when click on Account Avatar  */}

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={handleProfileClick}>
                    {user.profilePicture
                        ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                        : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                    }
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

            {/*  when user interact with search box  */}

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackBarClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleSnackBarClose} severity="error" sx={{width: '100%'}}>User does not exist.</Alert>
            </Snackbar>
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={isSearching}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </div>
    );
}

export default TopBar;