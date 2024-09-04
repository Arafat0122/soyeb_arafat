import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-slate-100 text-black px-1 lg:px-0">
            <Navbar></Navbar>
            <div className="max-w-sm md:max-w-2xl lg:max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;