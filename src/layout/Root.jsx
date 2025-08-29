import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";


const Root = () => {
    return (
        <div className="">
            <div>
                <Navbar></Navbar>
                <div className="bg-white">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;