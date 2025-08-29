

const Logo = () => {
    return (
        <div>
            <div className="flex items-center gap-2 text-black">
                <img className="w-[80px]" src="/saa-logo.png" alt="" />
                <div className="">
                    <p className="hidden text-2xl font-extrabold text-white font-tourney lg:flex">So<span className="text-blue-600">y</span>eb A<span className="text-blue-600">h</span>med  </p>
                <p className="hidden text-2xl font-extrabold text-white font-tourney lg:flex"><span className="ml-2 text-blue-600">  A</span>rafat</p>
                </div>
            </div>
        </div>
    );
};

export default Logo;