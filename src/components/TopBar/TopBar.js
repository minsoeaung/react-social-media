import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import {Link, useLocation} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {useContext} from "react";
import {baseUrl} from "../../shared/baseUrl";
import {Avatar, Badge, IconButton, Stack} from "@mui/material";

const TopBar = () => {
    const {user} = useContext(AuthContext)
    let location = useLocation();
    let pathName = location.pathname

    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <Link to="/">React Social</Link>
            </div>
            <div className="topbar-mid">
                <SearchIcon className="search-icon"/>
                <input type="text" placeholder="Search..."/>
            </div>
            <Stack direction="row" spacing={1}>
                <Link to='/'>
                    <IconButton aria-label="New Feed" color="default">
                        {pathName === '/'
                            ? <HomeIcon color='primary'/>
                            : <HomeOutlinedIcon/>
                        }
                    </IconButton>
                </Link>
                <IconButton aria-label="Message" color="default">
                    <Badge badgeContent={4} color="error">
                        <CommentOutlinedIcon/>
                    </Badge>
                </IconButton>
                <IconButton aria-label="Followings" color="default">
                    <Badge badgeContent={2} color="error">
                        <PersonOutlineIcon/>
                    </Badge>
                </IconButton>
                <IconButton aria-label="Notification" color="default">
                    <Badge badgeContent={2} color="error">
                        <NotificationsNoneIcon/>
                    </Badge>
                </IconButton>
                <Link to={`/profile/${user.username}`}>
                    <Avatar
                        src={user.profilePicture ? `${baseUrl}images/${user.profilePicture}` : `${baseUrl}images/person/noAvatar.png`}
                        alt={user.username}
                    />
                </Link>
            </Stack>
        </div>
    );
}

export default TopBar;