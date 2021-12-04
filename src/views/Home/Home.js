import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
import './Home.css'
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const Home = ({onlineFriendIdList, setCurrChat}) => {
    const {user} = useContext(AuthContext)

    return (
        <main className="home-container">
            <Feed username={user.username} isProfile={false}/>
            <SideBar
                onlineFriendIdList={onlineFriendIdList}
                currentUserId={user._id}
                setCurrChat={setCurrChat}
            />
        </main>
    )
}

export default Home