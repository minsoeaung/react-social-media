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
                <input type="text" placeholder="Search"/>
            </div>
            <div className="topbar-right">
                <div className="navigation-icon">
                    <Link to="/" className="nav-link">
                        {pathName === '/' ?
                            <HomeIcon/>
                            :
                            <HomeOutlinedIcon/>
                        }
                    </Link>
                </div>
                <div className="navigation-icon">
                    <CommentOutlinedIcon/>
                    <span className="icon-badge">1</span>
                </div>
                <div className="navigation-icon">
                    <PersonOutlineIcon/>
                    <span className="icon-badge">4</span>
                </div>
                <div className="navigation-icon">
                    <NotificationsNoneIcon/>
                    <span className="icon-badge">1</span>
                </div>
                <div className="navigation-icon">
                    <Link to={`/profile/${user.username}`}>
                        <img
                            className="profile-image"
                            src={user.profilePicture ? `${baseUrl}images/${user.profilePicture}` : `${baseUrl}images/person/noAvatar.png`}
                            alt={user.username}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;