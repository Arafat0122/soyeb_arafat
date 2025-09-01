import { useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendWhatsApp = () => {
    const { name, email, phone, service, budget, details } = formData;

    const message = `Hello Soyeb, I want to discuss a project.
Name: ${name}
Email: ${email}
WhatsApp: ${phone}
Service: ${service}
Budget: ${budget}
Project Details: ${details}`;

    const myNumber = "8801608318553";
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 text-white">
      <form
        className="p-8 space-y-6 bg-gray-950 rounded-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">Full Name*</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">Email Address*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">Phone (WhatsApp)*</label>
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+8801*******"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">Services*</label>
            <input
              type="text"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              placeholder="Insert Your Service"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">Project Budget*</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Insert Your Range"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">Project Details*</label>
          <textarea
            name="details"
            required
            value={formData.details}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us more about your project..."
            className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Custom WhatsApp Button */}
        <button
          type="button"
          onClick={handleSendWhatsApp}
          className="theme_btn flex items-center justify-center gap-2"
        >
          Send Message
          <HiArrowUp className="arrow_icon" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;