'use client';
import { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

export default function Faq() {
  const [isOpen, setIsOpen] = useState([]);

  const toggleAccordion = (index) => {
    setIsOpen((prevOpen) => {
      const updatedOpenState = [...prevOpen];
      updatedOpenState[index] = !updatedOpenState[index];
      return updatedOpenState;
    });
  };

  return (
    <section className="faq mt-28">
      <div className="container mx-auto">
        <h2 className="faq__title h2 text-center mb-[50px]">We have answers</h2>
        {/* item wrapper */}
        <div className="max-w-5xl mx-auto">
          {/* item 1 */}
          <div
            className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${isOpen[0] ? 'open' : ''
              }`}
            onClick={() => toggleAccordion(0)}
          >
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className="h4">Why to believe in Medicon-Group?</h4>
              {/* icon */}
              <div className="faq__btn text-accent">
                {isOpen[0] ? <RiSubtractFill /> : <RiAddFill />}
              </div>
            </div>
            {/* answer text */}
            <div className={`faq__answer h-0 overflow-hidden ${isOpen[0] ? 'open' : ''}`}>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?
              </p>
            </div>
            <div></div>
          </div>
          {/* item 2 */}
          <div
            className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${isOpen[1] ? 'open' : ''
              }`}
            onClick={() => toggleAccordion(1)}
          >
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className="h4">Why to buy from Medicon-Group?</h4>
              {/* icon */}
              <div className="faq__btn text-accent">
                {isOpen[1] ? <RiSubtractFill /> : <RiAddFill />}
              </div>
            </div>
            {/* answer text */}
            <div className={`faq__answer h-0 overflow-hidden ${isOpen[1] ? 'open' : ''}`}>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?
              </p>
            </div>
            <div></div>
          </div>
          {/* item 3 */}
          <div
            className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${isOpen[2] ? 'open' : ''
              }`}
            onClick={() => toggleAccordion(2)}
          >
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className="h4">Why to Contact with Medicon-Group?</h4>
              {/* icon */}
              <div className="faq__btn text-accent">
                {isOpen[2] ? <RiSubtractFill /> : <RiAddFill />}
              </div>
            </div>
            {/* answer text */}
            <div className={`faq__answer h-0 overflow-hidden ${isOpen[2] ? 'open' : ''}`}>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?
              </p>
            </div>
            <div></div>
          </div>
          {/* item 4 */}
          <div
            className={`faq__item px-[30px] pt-7 pb-4 border-b cursor-pointer select-none ${isOpen[3] ? 'open' : ''
              }`}
            onClick={() => toggleAccordion(3)}
          >
            {/* title & icon */}
            <div className="flex items-center justify-between mb-[10px]">
              {/* title */}
              <h4 className="h4">Why tobelieve in Medicon-Group?</h4>
              {/* icon */}
              <div className="faq__btn text-accent">
                {isOpen[3] ? <RiSubtractFill /> : <RiAddFill />}
              </div>
            </div>
            {/* answer text */}
            <div className={`faq__answer h-0 overflow-hidden ${isOpen[3] ? 'open' : ''}`}>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatibus?
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}