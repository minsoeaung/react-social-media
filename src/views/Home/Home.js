import Feed from "../../components/Feed/Feed";
import SideBar from "../../components/SideBar/SideBar";
import './Home.css'

const Home = () => {
    return (
        <main className="home-container">
            <Feed username='user1' isProfile={false}/>
            <SideBar/>
        </main>
    )
}

export default Home