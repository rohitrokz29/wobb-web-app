import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

//top brands images
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';

//component representing the top active campaigns in the company
const ActiveTopCampaigns = () => {

    //currentindex represent the campaign currently shown on the screen
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    //list of top campaigns
    const campaigns = [
        {
            brand: "HDFC Life",
            payout: "Fixed Pay, Commission-Based (for affiliates)",
            progress: 60,
            description: 'Long-term life insurance provider, HDFC Life and Wobb together worked on their campaign further offering individuals a wide range of services. ',
            image: "https://blog.wobb.ai/wp-content/uploads/2021/12/HDFC_Bank_Logo-236x300.jpg"
        },
        {
            brand: "Binance",
            payout: "Commission-Based, Fixed Pay, Referral Bonus",
            progress: 40,
            description: "Collaborated with Binance for a long term.",
            image: "https://cryptopro.app/wp-content/uploads/2019/08/Binance-Blog-Image-1.jpg"
        },
        {
            brand: "Biba",
            payout: "Barter, Fixed Pay",
            progress: 70,
            description: "With a wide range of Indian ethnic wear for women and girls, Biba has managed to make a name for itself. Festive kurtas to ghagras and suits, Biba has it all and to get even more they collaborated with Wobb for their influencer marketing campaign.",
            image: "https://blog.wobb.ai/wp-content/uploads/2021/12/article3180.jpg"
        },
        {
            brand: "Meesho",
            payout: "Commission-Based, Fixed Pay",
            progress: 50,
            description: "Meesho, one of the most trusted partner in the wears.",
            image: "https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
        }
    ];

    //list of top brands colloborated with the company
    const topBrands = [img1, img2, img3, img4, img5, img6, img7];

    const cardChange = () => {
        // function to change the campaign card
        const timer = setTimeout(() => {
            setFade(true);
        }, 100);

        const resetTimer = setTimeout(() => {
            setFade(false);
        }, 960);

        return () => {
            clearTimeout(timer);
            clearTimeout(resetTimer);
        };
    }

    const handlePrev = () => {
        // function to run on pressing the left/prev button
        cardChange();
        setTimeout(() => {
            setCurrentIndex(currentIndex => (currentIndex - 1 < 0) ? campaigns.length - 1 : (currentIndex - 1));
        }, 950);

    }
    const handleNext = () => {
        // function to run on pressing the right/next button
        cardChange();
        setTimeout(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1 >= campaigns.length) ? 0 : (currentIndex + 1));
        }, 950);
    }

    return (
        <section className="py-12  bg-gray-100 flex flex-col items-center space-y-8">
            <h3 className="text-3xl font-semibold text-center ">Active Top Campaigns</h3>

            <div className="flex justify-center items-center space-x-4">
                {/* Prev/left button */}
                <button
                    onClick={handlePrev}
                    className={`p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500`}
                >
                    <FaArrowLeft />
                </button>

                {/* Prev/left button */}
                <button
                    onClick={handleNext}
                    className={`p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500`}
                >
                    <FaArrowRight />
                </button>
            </div>

            <div
                className="w-4/5 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row border border-gray-300 transition-transform transform hover:scale-105"
            >
                {/* Left Side: Campaign Details */}
                <div className={`flex-1 flex flex-col justify-center items-center p-4 transition-opacity duration-500 ease-in-out ${fade ? "opacity-0" : "opacity-100"} `}>
                    <h4 className="text-2xl font-bold text-blue-600">{campaigns[currentIndex].brand} Campaign</h4>
                    <p className="text-gray-700 mt-2"> <strong>Payout Details: </strong>{campaigns[currentIndex].payout}</p>
                    <p className="text-gray-700 mt-2">{campaigns[currentIndex].description}</p>

                    {/* Hiring Progress Bar */}
                    <div className="w-3/4 bg-gray-300 rounded-full h-4 mt-4 overflow-hidden">
                        <div
                            className="bg-blue-500 h-full text-white text-xs font-bold flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"
                            style={{ width: `${campaigns[currentIndex].progress}%` }}
                        >
                            {campaigns[currentIndex].progress}% Hired
                        </div>
                    </div>

                    {/*  apply to the campaign button */}
                    <button className="mt-5 bg-blue-600 text-white px-3 py-2 text-mu rounded  hover:bg-blue-500" style={{ maxWidth: "10rem" }}>
                        Apply Now
                    </button>
                </div>

                {/* Company Logo  */}
                <div className={`flex-1 flex items-center justify-center p-4 transition-opacity duration-500 ease-in-out ${fade ? "opacity-0" : "opacity-100"}`}>
                    <img
                        loading='lazy'
                        src={campaigns[currentIndex].image}
                        alt={`${campaigns[currentIndex].brand} Campaign`}
                        className="rounded-lg object-contain max-w-[300px] max-h-[200px]  m-5 object-cover "
                    />
                </div>
            </div>

            <div className="text-center text-lg font-semibold text-gray-700">
                <p>Trusted by 5000+ agencies and D2C companies</p>
            </div>

            {/* top brands collaborated with the company */}
            <div className="flex justify-center">
                <div className="flex flex-wrap gap-4 justify-center ">
                    {/* Mapping through images of top brands */}
                    {topBrands?.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-[100px] h-[50px] object-contain rounded-lg shadow-lg 
                            md:w-[150px] md:h-[50px] 
                            sm:w-[100px] sm:h-[40px] 
                            xs:w-[80px] xs:h-[30px]"                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActiveTopCampaigns;


