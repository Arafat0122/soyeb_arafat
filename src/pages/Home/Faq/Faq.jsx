import React, { useState } from "react";

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
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 dark:bg-neutral-900">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border border-gray-200 rounded-lg dark:border-neutral-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-3 font-medium text-left text-gray-900 transition dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
              >
                {item.question}
                <span className="ml-2 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
