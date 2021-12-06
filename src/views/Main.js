import TopBar from "../components/TopBar/TopBar";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <TopBar/>
            <div style={{backgroundColor: "#FFF0E5", fontFamily: "Roboto"}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Main