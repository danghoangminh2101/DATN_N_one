'use client'
import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="border rounded-lg shadow-md mb-4">
      <div 
        className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-blue-600">{question}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
          ▼
        </span>
      </div>
      <div 
        ref={contentRef} 
        style={{ maxHeight: height }} 
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    { question: "Mauris Congue Euismod Purus At Semper?", answer: "Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo." },
    { question: "Donec Mattis Finibus Elit Ut Tristique?", answer: "Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida nisi id fringilla ultricies." },
    { question: "Aenean Elit Orci, Efficitur Quis Nisl?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { question: "Pellentesque Habitant Morbi Tristique?", answer: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris." },
    { question: "Nam Pellentesque Aliquam Metus?", answer: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-[60%] m-auto mt-8 mb-20'>
      <h2 className="text-2xl font-bold mb-4">Below are frequently asked questions, you may find the answer for yourself</h2>
      <p className="mb-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
            isOpen={openIndex === index} 
            toggleOpen={() => toggleOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
