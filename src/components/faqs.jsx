import React from "react";
import Faqs from "../setdata/faqs";
import FaqsData from "../data/faqs";

const faqs = () => {
  return (
    <ul className="faqs divide-y divide-slate-300">
      {FaqsData.map(({ heading, content }) => (
        <Faqs heading={heading} content={content} />
      ))}
    </ul>
  );
};

export default faqs;