import { useState } from "react";
import { IoSend } from "react-icons/io5";
import Swal from "sweetalert2";
import ContactBanner from "./Banner/ContactBanner";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactForm/ContactInfo";
import GetStart from "../Home/GetStart/GetStart";
import MotionWrapper from "@/common/MotionWrapper/MotionWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const phoneNumber = "+8801780515102";
    const message = encodeURIComponent(`
            Name: ${formData.user_name}
            Email: ${formData.user_email}
            Message: ${formData.message}
        `);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

    Swal.fire({
      title: "Message Sent!",
      text: "You will be redirected to WhatsApp.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({ user_name: "", user_email: "", message: "" });
  };

  return (
    <section className="">
      <MotionWrapper direction="up" delay={0.1}>
        <ContactBanner />
      </MotionWrapper>
      <MotionWrapper direction="up" delay={0.1}>
        <div className="py-[40px]  md:py-[70px] lg:py-[120px] max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center md:mb-12 md:text-5xl mb-7">
            Have a Project Idea?
          </h2>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="col-span-12 lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Contact;
