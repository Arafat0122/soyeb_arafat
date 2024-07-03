

const Banner = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
                <div className="text-5xl font-anton lg:pl-5">
                    <h1 className="mb-2">Hi, I<span className="text-red-600 font-bold">{`'`}</span>m Arafat</h1>
                    <h2 className="">A dedicated web developer</h2>
                    <p className="text-2xl space-x-2 mt-5 ">
                        <span>Design </span>
                        <span className="text-red-600 font-bold">*</span>
                        <span>Development </span>
                        <span className="text-red-600 font-bold">*</span>
                        <span>Consultation</span>
                    </p>
                </div>
                <div className="flex justify-center bg-[url(https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-512.png)] bg-no-repeat bg-cover bg-opacity-">
                    <img className="h-96" src="https://i.ibb.co/b1WPbgW/Arafat.png" alt="" />
                </div>
            </div>
            <div className="h-8 bg-black text-white font-bold font-monster lg:px-5 flex items-center justify-center">
                <div className="space-x-2 lg:hidden">
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                </div>
                <div className="hidden lg:flex space-x-2">
                    <span className="text-red-600 font-bold">*</span>
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                </div>
            </div>
        </>
    );
};

export default Banner;