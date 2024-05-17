"use client"
import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-3 border-t-[1px] w-[800px] pl-1  border-[#A4AEA4] border-b-[1px]">

      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex flex-row justify-between w-[90%]"
      >
        <span className="text-[16px] font-Gelasio font-semibold text-primary4">{title}</span>
        <div>
          <MdArrowDropDown
          size={30}
            className={`transform origin-center transition duration-500 ease-out  ${
              accordionOpen && "!rotate-180"
            }`}
          />

        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pt-[0.5rem] text-[13px] font-Gelasio font-semibold text-primary4 w-[70%] ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;