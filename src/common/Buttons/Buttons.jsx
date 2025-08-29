import { HiArrowUp } from "react-icons/hi";


const Buttons = ({ btnText = "Explore more", links = "/" }) => {
  return (
    <button className="theme_btn">{btnText} <div className="arrow_icon"><HiArrowUp/></div></button>
  );
};

export default Buttons;
