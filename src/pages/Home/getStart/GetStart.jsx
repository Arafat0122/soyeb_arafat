import Buttons from '@/common/Buttons/Buttons';

const GetStart = () => {
  return (
    <div className="max-w-7xl mx-auto pb-[40px] mb:pb-[60px] lg:pb-[120px] px-4 mt-5 md:mt-10 lg:mt-20">
      <div className="relative w-full px-4 py-8 md:px-0 bg-gray-950 rounded-xl">
        <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  rounded-xl" />

        <div className="relative z-10 max-w-3xl py-[15px] mb:py-[30px] mx-auto text-white">
          <h1 className='text-3xl md:text-3xl lg:text-5xl font-bold text-center md:leading-[50px]'>
            Bring Your Ideas Alive
          </h1>
          <p className='max-w-2xl pb-[20px] md:pb-[40px] pt-[10px] md:pt-[20px] mx-auto text-sm md:text-xl text-center'>
            I’m Soyeb Ahmed Arafat — a full-stack developer passionate about building web applications that drive real impact. Let’s work together to bring your ideas to life.
          </p>

          <div className="flex justify-center gap-4">
            <Buttons
              btnText="Hire Me"
              phoneNumber="8801608318553"
              whatsappMessage="Hello Soyeb, I would like to hire you for a project."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;