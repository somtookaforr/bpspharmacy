import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={toggle}>
        <h3 className="font-medium">{heading}</h3>
        <span className="mt-1">
          {isActive ? (
            <AiOutlineMinusCircle className="text-[#F38722]" />
          ) : (
            <AiOutlinePlusCircle className="text-[#F38722]" />
          )}
        </span>
      </div>
      {isActive && (
        <div className="accordion-content text-gray-500 font-normal pr-10 pl-6">
          {content}
        </div>
      )}
    </li>
  );
};

export default Accordion;
