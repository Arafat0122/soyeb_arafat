import Buttons from '@/common/Buttons/Buttons';
import React from 'react';

const GetStart = () => {
    return (
        <div className="max-w-7xl mx-auto py-[120px]">
            <div className="relative w-full px-4 py-8 md:px-0 bg-gray-950 rounded-xl">
        <div className="absolute bg-gray-950 inset-0 linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]  rounded-xl" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl py-[30px] mx-auto text-white">
           <h1 className='text-5xl font-bold text-center leading-[50px]'>Ready to elevate your brand and unlock new growth?</h1>
           <p className='max-w-2xl pb-[40px] pt-[20px] mx-auto text-xl text-center'>With years of experience, we’ve helped businesses generate millions partner with us to scale confidently.</p>

           <div className="flex justify-center gap-4">
          <Buttons btnText="Get Start" />
          
        </div>
        </div>
      </div>
        </div>
    );
};

export default GetStart;