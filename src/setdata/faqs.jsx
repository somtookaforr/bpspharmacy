import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3 className="font-medium text-lg">{heading}</h3><span>{isActive ? <AiOutlineMinusCircle className="text-[#F38722]"/> : <AiOutlinePlusCircle className="text-[#F38722]"/> }</span>
      </div>
      {isActive && <div className="accordion-content text-gray-500 font-normal">{content}</div>}
    </li>
  );
};

export default Accordion;