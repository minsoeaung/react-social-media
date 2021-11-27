import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import {Link, useLocation} from "react-router-dom";

const TopBar = () => {
    let location = useLocation();
    let pathName = location.pathname

    return (
        <div className="topbar-container">
            {/*----------------------------------------------------*/}
            <div className="topbar-left">
                <Link to="/">React Social</Link>
            </div>
            {/*----------------------------------------------------*/}
            <div className="topbar-mid">
                <SearchIcon className="search-icon"/>
                <input type="text" placeholder="Search"/>
            </div>
            {/*----------------------------------------------------*/}
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

                    {/* user1 will be dynamic later */}
                    <Link to="/profile/user1">
                        <img
                            className="profile-image"
                            src="/assets/person/1.jpeg"
                            alt="dfjsfa"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;