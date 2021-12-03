import './SideBar.css'
import OnlineFriendList from "../OnlineFriendList/OnlineFriendList";

const SideBar = ({onlineFriendIdList, currentUserId, setCurrChat}) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <h3>Online Friends</h3>
                <OnlineFriendList
                    onlineFriendIdList={onlineFriendIdList}
                    currentUserId={currentUserId}
                    setCurrChat={setCurrChat}
                />
            </div>
        </aside>
    )
}

export default SideBar