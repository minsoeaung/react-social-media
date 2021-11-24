import Feed from "../../components/Feed/Feed";
import './Home.css'
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
    return (
        <main className="home-container">
            <Feed/>
            <SideBar/>
        </main>
    )
}

export default Home