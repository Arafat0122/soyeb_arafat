import { HiArrowUp } from "react-icons/hi";

const Buttons = ({ btnText = "Explore more", whatsappMessage, phoneNumber, className = "" }) => {
  const handleClick = () => {
    if (whatsappMessage && phoneNumber) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
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