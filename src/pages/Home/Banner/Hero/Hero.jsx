import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star, Rocket } from "lucide-react";
import Buttons from "../../../../common/Buttons/Buttons";
import CompanyLogo from "../../CompnayLogo/CompnayLogo";

const Hero = () => {
  const consultationRef = useRef(null);
  const buttonRef = useRef(null);
  const dominateRef = useRef(null);
  const blubRef = useRef(null);
  const screwRef = useRef(null);
  const designRef = useRef(null);
  const developRef = useRef(null);

  useEffect(() => {
    if (designRef.current) {
      const chars = designRef.current.querySelectorAll(".char");

      chars.forEach((char, index) => {
        if (index === 0) {
          gsap.fromTo(
            char,
            { opacity: 0, x: -80, scale: 0.8 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.1,
            }
          );
        } else if (index === 1) {
          gsap.fromTo(
            char,
            { opacity: 0, y: -60, rotation: 15 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: "bounce.out",
              delay: 0.25,
            }
          );
        } else if (index === 2) {
          gsap.fromTo(
            char,
            { opacity: 0, scale: 0, rotation: 180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              ease: "elastic.out(1, 0.5)",
              delay: 0.4,
            }
          );
        } else if (index === 3) {
          gsap.fromTo(
            char,
            { opacity: 0, x: 70, skewX: 20 },
            {
              opacity: 1,
              x: 0,
              skewX: 0,
              duration: 0.9,
              ease: "power3.out",
              delay: 0.55,
            }
          );
        } else if (index === 4) {
          gsap.fromTo(
            char,
            { opacity: 0, rotationY: -90, scale: 1.3 },
            {
              opacity: 1,
              rotationY: 0,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.7,
            }
          );
        } else if (index === 5) {
          gsap.fromTo(
            char,
            { opacity: 0, y: 80, scale: 0.6, rotation: -10 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 1.1,
              ease: "back.out(1.7)",
              delay: 0.85,
            }
          );
        }
      });
    }

    if (developRef.current) {
      const chars = developRef.current.querySelectorAll(".char");

      chars.forEach((char, index) => {
        gsap.fromTo(
          char,
          {
            opacity: 0,
            y: -120,
            rotation: (Math.random() - 0.5) * 40,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "bounce.out",
            delay: 1.2 + index * 0.1,
          }
        );
      });
    }

    if (dominateRef.current) {
      const chars = dominateRef.current.querySelectorAll(".char");
      const colors = [
        "#06d6a0",
        "#ff6b6b",
        "#4ecdc4",
        "#45b7d1",
        "#f9ca24",
        "#f0932b",
        "#eb4d4b",
        "#6c5ce7",
      ];
      let colorIndex = 0;

      const changeColor = () => {
        chars.forEach((char, index) => {
          gsap.to(char, {
            rotationY: 90,
            duration: 0.3,
            ease: "power2.in",
            delay: index * 0.08,
            onComplete: () => {
              char.style.color = colors[colorIndex % colors.length];
              gsap.to(char, {
                rotationY: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            },
          });
        });
        colorIndex++;
      };
      setTimeout(() => {
        changeColor();

        setInterval(changeColor, 7000);
      }, 5000);
    }

    const handleMouseMove = (e) => {
      const banner = document.querySelector(".banner_area");
      if (banner) {
        banner.style.setProperty("--clientX", `${e.clientX}px`);
        banner.style.setProperty("--clientY", `${e.clientY}px`);
      }

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      if (blubRef.current) {
        gsap.to(blubRef.current, {
          duration: 0.8,
          x: xPos * 20,
          y: yPos * 15,
          rotation: xPos * 5,
          ease: "power2.out",
        });
      }

      if (screwRef.current) {
        gsap.to(screwRef.current, {
          duration: 1.2,
          x: xPos * -15,
          y: yPos * -10,
          rotation: xPos * -8,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-12 px-4 py-20 mx-auto md:flex-row max-w-7xl">
      <div className="w-full md:w-[60%]">
        <h1 className="text-[50px] font-bold leading-[1.3] text-white">
          Design, Development, &{" "}
          <span ref={dominateRef} className="animated-dominate">
            <span className="char">C</span>
            <span className="char">o</span>
            <span className="char">n</span>
            <span className="char">s</span>
            <span className="char">u</span>
            <span className="char">l</span>
            <span className="char">t</span>
            <span className="char">a</span>
            <span className="char">t</span>
            <span className="char">i</span>
            <span className="char">o</span>
            <span className="char">n</span>
          </span>{" "}
          the Digital Space
        </h1>
        <p className="mt-6 text-lg font-normal text-slate-300">
          Helping businesses thrive with innovative digital strategies, creative
          solutions, and measurable outcomes.
        </p>
        <div className="flex gap-4 mt-8">
          <Buttons btnText="Book a Call" />
        </div>

        <div className="max-w-[600px] mt-[40px]">
          <CompanyLogo />
        </div>
      </div>

      <div className="w-full md:w-[40%] h-[500px] flex justify-end relative">
        <img
          src="https://i.ibb.co/b1WPbgW/Arafat.png"
          alt="Hero"
          className="object-contain h-full"
        />

        <div className="absolute -right-[10%] flex items-center gap-2 px-4 py-2 shadow-lg top-[42%] bg-white/20 backdrop-blur-md rounded-xl">
          <Star className="w-6 h-6 text-blue-500" />
          <span className="font-semibold text-white">2k+ Success Stories</span>
        </div>

        <div className="absolute flex items-center gap-2 px-4 py-2 shadow-lg bottom-10 left-5 bg-white/20 backdrop-blur-md rounded-xl">
          <Rocket className="w-6 h-6 text-blue-500" />
          <span className="font-semibold text-white">
            Your Growth, Our Mission
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
