import Buttons from "@/common/Buttons/Buttons";

const AboutBanner = () => {
  return (
    <section className="relative w-full px-4 py-8 md:px-0 bg-gray-950 pt-[100px] h-[700px] mb-12 rounded-b-[60px]">
      <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  " />

      <div className="relative z-10 text-white ">
        <div className="relative flex flex-col items-center justify-end h-full gap-4 mx-auto ">
          <img
            src="https://i.ibb.co/b1WPbgW/Arafat.png"
            alt="Hero"
            className="h-[600px]"
          />
          <h2 className="absolute text-[40px] font-bold text-white  top-[10%] uppercase left-[20%]">
            Empowering <br /> Ideas With <br /> Code
          </h2>
          <div className="absolute max-w-xl mt-2 top-[10%] right-[5%]">
            <p className="text-sm text-white md:text-base ">
              I am passionate about crafting innovative digital solutions that empower
              businesses and individuals. I believe in creativity, collaboration, and
              cutting-edge technology to build products that truly make an impact.
            </p>
            <div className="flex gap-4 mt-8">
              <Buttons
                btnText="Let’s Build Together"
                phoneNumber="8801608318553"
                whatsappMessage="Hi Soyeb, I want to discuss a project and build something together."
              />
            </div>
          </div>
          <h1 className="text-[170px] font-bold absolute bottom-[0%] shadow-xl">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
