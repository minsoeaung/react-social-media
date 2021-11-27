import TopBar from "../components/TopBar/TopBar";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <TopBar/>
            <Outlet/>
        </div>
    )
}

export default Main