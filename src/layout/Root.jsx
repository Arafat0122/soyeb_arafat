import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";


const Root = () => {
    return (
<<<<<<< HEAD
        <div className="bg-slate-100 text-black px-1 lg:px-0">
=======
        <div className="bg-slate-100">
>>>>>>> d8aa0efb56e8cbef389b332b84a7e54caf65721b
            <Navbar></Navbar>
            <div className="max-w-sm md:max-w-2xl lg:max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;