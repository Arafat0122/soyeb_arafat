import { HiArrowUp } from "react-icons/hi";

const Buttons = ({ btnText = "Explore more", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`theme_btn flex items-center justify-center gap-2 ${className}`}
    >
      {btnText}
      <div className="arrow_icon">
        <HiArrowUp />
      </div>
    </button>
  );
};

export default Buttons;