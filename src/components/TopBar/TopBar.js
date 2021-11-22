import './TopBar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const TopBar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <a>React Social</a>
            </div>

            <div className="topbar-mid">
                <SearchIcon className="search-icon"/>
                <input type="text" placeholder="Search"/>
            </div>

            <div className="topbar-right">
                <div className="navigation-icon">
                    <HomeOutlinedIcon/>
                </div>
                <div className="navigation-icon">
                    <ChatBubbleOutlineIcon/>
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
                    <img
                        className="profile-image"
                        src="/assets/person/1.jpeg"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopBar;