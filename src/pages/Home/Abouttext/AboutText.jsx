import { motion } from "framer-motion";
import React from "react";

// Recursive function: handles string + JSX children
const animateText = (children) => {
  if (typeof children === "string") {
    return children.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.03, ease: "easeOut" }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  }

  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      children: animateText(children.props.children),
    });
  }

  // If array of children → map over it
  if (Array.isArray(children)) {
    return children.map((child, i) => <React.Fragment key={i}>{animateText(child)}</React.Fragment>);
  }

  return children;
};

const SlideInText = ({ children }) => {
  return (
    <h2 className="font-bold text-left text-[20px] lg:text-center md:text-4xl">
      {animateText(children)}
    </h2>
  );
};

const SlideInView = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl px-4 mx-auto py-10 md:py-20 lg:py-[120px] font-sans">
      <SlideInText>
        At Upreach, we deliver real{" "}
        <span className="text-blue-500">
          results through high-converting
        </span>{" "}
        marketing strategies designed to scale your business, attract the right
        audience, <span className="text-blue-500">
         and maximize ROI with precision.
        </span>{" "}
      </SlideInText>
    </div>
  );
};

export default SlideInView;
