import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="mx-4 mt-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        
    );
};

export default Root;