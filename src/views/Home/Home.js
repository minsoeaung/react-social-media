import TopBar from "../../components/TopBar/TopBar";
import Feed from "../../components/Feed/Feed";
import './Home.css'
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
    return (
        <>
            <TopBar/>

            <main className="main-container">
                <Feed/>
                <SideBar/>
            </main>
        </>
    )
}

export default Home