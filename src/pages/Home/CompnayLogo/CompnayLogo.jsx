import Marquee from "react-fast-marquee";

const logos = [
  "https://rahmahinstitute.com/Rahmah-Institute.png",
  "https://i.ibb.co/F4sQdL8/qutoron-logo.png",
  "https://geekcodedig.netlify.app/assets/logo.png",
  "https://loopglobal.netlify.app/Loop_Global_Tech.png",
  "https://digitalcrafted.netlify.app/DigitalCrafted_Logo_HR_Dark.png"
];

const CompanyLogo = () => {
  return (
    <div className="w-full py-6 bg-gray-950">
      <Marquee
        gradient={true}
        speed={50}
        pauseOnHover={true}
        gradientColor="#030712"
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center mx-10">
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="object-contain w-auto h-[30px] company-logo filter brightness-0 invert"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CompanyLogo;