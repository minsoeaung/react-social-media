import './SideBar.css'
import OnlineFriends from "../OnlineFriendList/OnlineFriends";
import {Users} from '../../dummyData'

const SideBar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <h3>Online Friends</h3>
                <OnlineFriends users={Users}/>
            </div>
        </aside>
    )
}

export default SideBar