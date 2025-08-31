import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Left & Right Icons
const ChevronLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Data
const cardData = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/gZ6wLnLW/shohaib-pic.jpg",
    name: "Shohaib Hossen",
    post: "Founder",
    company: "Rahmah Institute (Egypt)",
    description:
      "Working with Soyeb Ahmed Arafat was fantastic. The platform’s dashboards, chat, and video calling exceeded our expectations. Highly recommended!",
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co.com/J9pMyRZ/Rezaul-vai.jpg",
    name: "Rezaul Karim",
    post: "Founder",
    company: "QutorOn (Egypt)",
    description:
      "Soyeb delivered an intuitive and responsive LMS for our online Quran classes. His attention to detail and professionalism made the project seamless.",
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co.com/nqB2MGQn/FB-IMG-1683271056039.jpg",
    name: "Sabbir Ahamed",
    post: "Founder",
    company: "DigitalCrafted (Bangladesh)",
    description:
      "Our business website now looks modern, sleek, and fully functional thanks to Soyeb. Smooth animations and optimized performance elevated our brand presence.",
  },
  {
    id: 4,
    imageUrl: "https://st2.depositphotos.com/1782975/7728/i/450/depositphotos_77287826-stock-photo-happy-young-man.jpg",
    name: "Simon Robinson",
    post: "Student",
    company: "Alpha Pro (UK)",
    description:
      "Alpha Pro is fun, responsive, and engaging. Soyeb delivered a clean and interactive experience with excellent attention to usability.",
  },
  {
    id: 5,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0frCiB2KRDQUrjR5y1JW0GEcBBTgk41yGYw&s",
    name: "John Str.",
    post: "Founder",
    company: "GeekCode (USA)",
    description:
      "The GeekCode website is visually stunning and highly interactive. Soyeb handled everything from frontend to backend flawlessly.",
  },
  {
    id: 6,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/036/168/467/non_2x/of-cute-puppy-dog-kawaii-mascot-vector.jpg",
    name: "Austin Rusta",
    post: "Founder",
    company: "Loop Global Tech (Australia)",
    description:
      "The platform is scalable and user-friendly. Soyeb implemented advanced features with clean, efficient code, delivering on time with great communication.",
  },
];

export default function ClientSay() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % cardData.length);

  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => clearInterval(autoplayIntervalRef.current);
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    clearInterval(autoplayIntervalRef.current);
    if (!isPaused) autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
  };

  const onDragEnd = (_, info) => {
    const dragThreshold = 75;
    if (info.offset.x > dragThreshold) changeSlide(activeIndex - 1);
    else if (info.offset.x < -dragThreshold) changeSlide(activeIndex + 1);
  };

  return (
    <section className="flex-col items-center justify-center w-full px-4 pb-[40px]  md:pb-[60px] lg:pb-[120px] overflow-hidden font-sans">
      <div
        className="w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex flex-col w-full bg-white rounded-3xl dark:border-white/10 dark:bg-neutral-900">
          <h1 className="md:text-center pb-[40px] md:pb-[80px] text-3xl md:text-3xl lg:text-5xl font-bold">Hear What My Client are Saying</h1>
          <div className="relative  h-[500px] md:h-[450px] max-w-3xl w-full mx-auto flex items-center justify-center ">
            <motion.div
              className="flex items-center justify-center w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => (
                <Card key={card.id} card={card} index={index} activeIndex={activeIndex} totalCards={cardData.length} />
              ))}
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={() => changeSlide(activeIndex - 1)} className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center gap-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                    ? "w-6 bg-blue-500 "
                    : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"
                    }`}
                />
              ))}
            </div>
            <button onClick={() => changeSlide(activeIndex + 1)} className="p-2 border rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


function Card({ card, index, activeIndex, totalCards }) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) offset -= totalCards;
  else if (offset < -totalCards / 2) offset += totalCards;

  const isVisible = Math.abs(offset) <= 1;

  const animate = {
    x: `${offset * 60}%`,
    scale: offset === 0 ? 1 : 0.85,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: { type: "spring", stiffness: 260, damping: 30 },
  };

  return (
    <motion.div
      className="absolute w-[90%] md:w-[55%] h-[100%] flex items-center justify-center"
      style={{ transformStyle: "preserve-3d" }}
      animate={animate}
      initial={false}
    >
      <div className="relative flex flex-col items-center w-full h-full p-6 text-center bg-white border shadow-md dark:bg-neutral-800 rounded-2xl">
        <img src={card.imageUrl} alt={card.name} className="object-cover mt-[20px] mb-4  border-4 border-blue-500 rounded-full shadow-md h-[180px]" />
        <h3 className="text-lg font-semibold">{card.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{card.post} • {card.company}</p>
        <img src="/5start.png" className="mt-2" alt="" />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
      </div>
    </motion.div>
  );
}