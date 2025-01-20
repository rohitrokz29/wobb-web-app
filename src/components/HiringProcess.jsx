import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// component representing the hiring process 
const HiringProcess = () => {
    //steps in the hiring process
    const process = [
        {
            title: 'Post Your Campaign',
            description:
                'Add your brand, product details, and creative ideas. Creators will start applying within minutes.',
            image:
                'https://cdn.prod.website-files.com/6716c18e45760446b740a31c/67182f615f5ae6f89a3a8dfe_2.1%20Post%20a%20campaign.webp',
        },
        {
            title: 'Select Creators',
            description:
                'Review applications and approve the best-fit creators manually, or auto-approve eligible ones.',
            image:
                'https://cdn.prod.website-files.com/6716c18e45760446b740a31c/671831678cbb69c3b51a9933_2.2.%2520Inbound%2520Application-p-1600.webp',
        },
        {
            title: 'Ship Your Products',
            description:
                'Send products to creators easily with integrations like Shopify and WooCommerce for seamless ordering.',
            image:
                'https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718383c4640d6c6ec84ca4b_2.3%20ecommerce%20integration.webp',
        },
        {
            title: 'Review Content',
            description:
                'Creators upload their photos or videos. Review manually or let AI check the content for accuracy, saving you time.',
            image:
                'https://cdn.prod.website-files.com/6716c18e45760446b740a31c/671838bb09f47dab2c4b284e_3.3%20Deliverables.webp',
        },
        {
            title: 'Get It Live',
            description:
                'Approved creators will share the content on their social accounts, putting your brand in front of millions.',
            image:
                'https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718392aad065f3c8286b4c5_4.3%20Content%20Measurement.webp',
        },
    ];
    // current display step - index
    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        // function to run on pressing left/prev button
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? process.length - 1 : prevIndex - 1
        );
    };

    const goRight = () => {
        // function to run on pressing right/next button
        setCurrentIndex((prevIndex) =>
            prevIndex === process.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const changeInterval = setInterval(() => {
            goRight();
        }, 2000);
        return () => {
            clearTimeout(changeInterval);
        }
    }, []);

    return (<>
        <section className="py-12  bg-blue-100 flex flex-col items-center ">
            <h3 className="text-3xl font-semibold text-center ">How it works</h3>
            <div className='text-sm mt-1 text-center text-indigo-600 font-bold'>Automated Campaign Manager </div>

            <div className="relative mt-10 w-full max-w-7xl mx-auto overflow-hidden">
                {/* Left/prev Button */}
                <button
                    onClick={goLeft}
                    className="absolute left-2 z-50 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 shadow hover:bg-gray-700 focus:outline-none"
                >
                    <FaArrowLeft />
                </button>

                {/* Steps Card Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {/* Mapping over the hiring process steps  */}
                    {process.map((card, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full flex justify-center items-center"
                        >
                            <div className="w-[75vw] p-6 px-4 bg-white shadow-lg rounded-lg">
                                {/* Stepbox -card representing the process step */}
                                <StepBox {...card} stepNo={index + 1} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right/next Button */}
                <button
                    onClick={goRight}
                    className="absolute right-2 z-50 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-4 shadow hover:bg-gray-700 focus:outline-none"
                >
                    <FaArrowRight />
                </button>
            </div>

        </section>
    </>
    );
};

// component/card representing the step in the hiring process
const StepBox = ({ stepNo, title, description, image }) => {

    return (
        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row border border-gray-300 transition-transform transform hover:scale-105">
            {/* Step number and details */}
            <div className="flex-1 p-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    <strong>Step {stepNo}: </strong>
                    {title}
                </h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <button className="px-6 py-3 bg-yellow-400  font-semibold rounded hover:bg-yellow-300">
                    Get Started for Free
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center p-4">
                <img
                    loading="lazy"
                    src={image}
                    alt={`${title}`}
                    className="rounded-lg object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-64 md:max-h-72 lg:max-h-96"
                />
            </div>
        </div>
    );
};


export default HiringProcess;
