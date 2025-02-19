import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="relative">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;