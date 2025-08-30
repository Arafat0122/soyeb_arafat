import React, { useState, useEffect, useRef } from "react";
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
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/068/534/707/small_2x/happy-indian-man-entrepreneur-against-diagrams-portrait-image-positive-hindu-businessman-expressing-confidencegraphy-human-scene-successful-business-concept-realistic-photo.jpg",
    name: "John Doe",
    post: "CEO",
    company: "TechCorp Ltd.",
    description:
      "This service exceeded our expectations! The team was professional, creative, and extremely reliable. Highly recommended!",
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Sarah Khan",
    post: "Marketing Manager",
    company: "Creative Studio",
    description:
      "Working with them was an absolute pleasure. They understood our needs perfectly and delivered outstanding results.",
  },
  {
    id: 3,
    imageUrl: "https://img.freepik.com/premium-photo/man-suit-smiles-camera_1249303-8504.jpg?w=360",
    name: "Michael Smith",
    post: "Founder",
    company: "Startup Hub",
    description:
      "Amazing experience! The quality of work and attention to detail was top-notch. Would love to collaborate again.",
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
    <section className="flex-col items-center justify-center w-full px-4 pb-12 overflow-hidden font-sans">
      <div
        className="w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex flex-col w-full bg-white rounded-3xl dark:border-white/10 dark:bg-neutral-900">

        <h1 className="md:text-center pb-[40px] md:pb-[80px] text-[20px] md:text-3xl lg:text-5xl font-bold">Hear What My Client are Saying</h1>


          
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
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
        <img src={card.imageUrl} alt={card.name} className="object-cover mt-[20px] mb-4  border-4 border-blue-500 rounded-full shadow-md h-[180px] w-[180px]" />
        <h3 className="text-lg font-semibold">{card.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{card.post} • {card.company}</p>
        <img src="/5start.png" className="mt-2" alt="" />
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
      </div>
    </motion.div>
  );
}
