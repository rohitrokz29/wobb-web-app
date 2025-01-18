import { useEffect, useState } from "react";
import topImage from '../assets/main.webp'

//Main Section of Landing page
const Main = () => {
    const words = ["Join Campaigns", "Share Your Creativity", "Get Rewarded"];
    const [currentWord, setCurrentWord] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // word manipulation on the page
    useEffect(() => {
        let timeout;

        if (deleting) {
            // Delete the word
            if (currentWord.length > 0) {
                timeout = setTimeout(() => {
                    setCurrentWord(currentWord.slice(0, currentWord.length - 1));
                }, 100);
            } else {
                // Move to next word after deletion
                setDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        } else {
            // Type the word
            if (currentWord.length < words[wordIndex].length) {
                timeout = setTimeout(() => {
                    setCurrentWord(words[wordIndex].slice(0, currentWord.length + 1));
                }, 100);
            } else {
                // Wait before starting to delete
                timeout = setTimeout(() => {
                    setDeleting(true);
                }, 1000); 
            }
        }

        return () => clearTimeout(timeout);
    }, [currentWord, deleting, wordIndex]);

    return (<>
        {/* Hero Section */}
        <section className="text-center py-20   bg-blue-200 text-white" >
            <h2 className="text-5xl font-bold mb-4 text-black">Influencers to Collaborate with Top brands!</h2>

            <h3 className="text-3xl text-violet-600 font-bold mb-4">
                {/* manipulated word */}
                &nbsp;{currentWord}
            </h3>
            <div className="text-lg text-gray-700 mb-6 px-4 md:px-20">
                <p className="mx-4 px-4 md:px-20 md:mx-20">
                    Run campaigns where influencers promote your brand in exchange for products.
                    Automate hiring and content quality checks with AI, and discover the perfect creators
                    from a 400M+ influencer database.
                </p>
            </div>

            {/* Signup button  */}
            <button className="bg-yellow-400 text-black px-8 py-5 my-5 mb-12 rounded font-bold hover:bg-yellow-300">
                Start Your Free Campaign
            </button>

        </section>
        <div className="flex fle-col justify-center items-center py-12 px-3 mt-5 ">
            <img
                src={topImage}
                alt="image"
                className="w-full max-w-3xl rounded-lg px-2 shadow-lg"
            />
        </div>
    </>)
}
export default Main


