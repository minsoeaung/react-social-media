import TopBar from "./components/TopBar/TopBar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            <TopBar/>
            <Outlet/>
        </div>
    );
}

export default App;
