import React from "react";
import Marquee from "react-fast-marquee";

const CompanyLogo = () => {
  return (
    <div className="w-full py-6 bg-gray-950">
      <Marquee
        gradient={true}
        speed={50}
        pauseOnHover={true}
        gradientColor="#030712"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex items-center mx-10">
            <img
              src={`/logo${num}.svg`}
              alt={`Company Logo ${num}`}
              className="object-contain w-auto h-[30px] company-logo"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyLogo;
