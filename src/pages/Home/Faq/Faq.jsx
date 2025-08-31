import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, mobile app development, and digital marketing solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity, but most projects are completed within 4–8 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer maintenance and support packages to ensure your product runs smoothly after launch.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible. We provide fixed-price packages for small projects and hourly billing for larger or ongoing projects.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we collaborate with clients worldwide and adjust to different time zones to ensure smooth communication.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Firebase, and other modern frameworks to deliver scalable and high-performance solutions.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Absolutely. We can revamp your current website, improve performance, modernize the design, and optimize for SEO and responsiveness.",
  },
  {
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes, we include SEO optimization in our web development process and also provide digital marketing strategies to help your business grow online.",
  },
  {
    question: "How do you handle communication during projects?",
    answer:
      "We provide regular updates via email, chat, or project management tools, ensuring transparency and collaboration throughout the process.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can reach out through our contact form or email. We’ll discuss your requirements, suggest the best solutions, and start with a project proposal.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-16 dark:bg-neutral-900">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-left md:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-300 border border-gray-200 shadow-sm rounded-2xl dark:border-neutral-700 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-4 font-semibold text-left text-gray-900 transition-colors dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800"
              >
                <span className="text-base md:text-lg">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-xl font-bold select-none md:text-xl"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Answer with Smooth Animation */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
                      opacity: { duration: 0.3, delay: 0.05 },
                    }}
                    className="px-6 pb-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
