import React, { useState } from "react";
import Accordion from "../setdata/faqsitem";
import FaqsData from "../data/faqs";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ul className="lg:h-52 divide-y divide-slate-300">
      {FaqsData.map((faq, index) => (
        <Accordion
          key={faq.key}
          heading={faq.heading}
          content={faq.content}
          isActive={index === activeIndex}
          onClick={() => toggleAccordion(index)} // Pass the toggle function
        />
      ))}
    </ul>
  );
};

export default Faqs;
