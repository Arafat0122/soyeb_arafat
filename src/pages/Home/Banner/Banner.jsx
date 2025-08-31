import MotionWrapper from "@/common/MotionWrapper/MotionWrapper";
import Hero from "./Hero/Hero";

const Banner = () => {

    return (
        <>
            {" "}
            
            <section className="relative w-full px-4  md:px-0 bg-gray-950 pt-[100px]">
                <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  " />
                <div className="relative z-10 text-white">
                    <MotionWrapper delay={0.2}>
                    <Hero />
                    </MotionWrapper>
                </div>
            </section>
            
        </>
    );
};

export default Banner;
