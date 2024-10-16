'use client'
import React, { useState } from 'react'

function TooglePay() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle hiện/ẩn nội dung
    };

    const panels = [
        {
            id: 0,
            title: 'Direct bank transfer',
            content: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'
        },
        {
            id: 1,
            title: 'Check payments',
            content: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'
        },
        {
            id: 2,
            title: 'Cash on delivery',
            content: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'
        },
    ];

    return (
        <div className="payment-accordion element-mrg">
            {panels.map((panel, index) => (
                <div key={panel.id} className="panel panel-default single-my-account m-0">
                    {/* Panel Heading */}
                    <div className="panel-heading my-account-title">
                        <h4 className="panel-title">
                            <button
                                className="w-full text-left font-bold py-2 sm:py-3 text-sm sm:text-base border-b border-gray-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                {panel.title}
                            </button>
                        </h4>
                    </div>

                    {/* Accordion Content */}
                    <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            activeIndex === index ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="panel-body px-4 sm:px-6 pt-2 sm:pt-3">
                            <p className="text-xs sm:text-sm text-black">{panel.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TooglePay;
