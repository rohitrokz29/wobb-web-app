import react, { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (<>
        {/* Navbar Section */}
        <header className="flex justify-between items-center p-6 bg-blue-600 text-white relative  z-50">
            <Logo />
            <nav className="hidden  md:flex space-x-6 flex justify-between items-center">
                <NavItems />
            </nav>
            {/* Mobile Hamburger Menu */}
            <button className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >☰</button>

        </header>

        {/* Mobile Menu (Conditional Rendering) */}
        <div
            className={`md:hidden flex flex-col space-y-5 p-6 pt-12 bg-blue-500 text-white font-bold transition-all duration-1000 ease-in-out transform absolute left-0 right-0 mt-16 ${isOpen
                ? "opacity-100 translate-y-0 pl-12"
                : "opacity-0 translate-y-[-100%] pointer-events-none"
                }`}
            style={{
                zIndex: 10,
                position: 'absolute',
                top: '10px',
                left: 0,
                right: 0,
                height: "70vh"
            }}
        >
            {/* Mobile menu nav items */}
            <NavItems />
            <div className="flex items-center gap-0 justify-center pt-10"><Logo /></div>
        </div>


    </>)
}


// Wobb Logo
const Logo = () => {
    return (<>
        <h1 className="text-2xl font-bold flex items-center">
            <span className="w-8 h-8 flex items-center justify-center bg-blue-800 text-white rounded-full mr-2">w</span>
            <Link to="/">Wobb</Link>
        </h1>
    </>)
}


// Header Nav Items
const NavItems = () => {
    return (<>

        <Link to="#" className="hover:text-gray-200  transform hover:scale-110 transition-all ease-in-out duration-300">Home</Link>
        <Link to="#" className="hover:text-gray-200  transform hover:scale-110 transition-all ease-in-out duration-300">Browse Campaigns</Link>
        <Link to="#" className="hover:text-gray-200  transform hover:scale-110 transition-all ease-in-out duration-300">Support</Link>
        <div className="flex items-center gap-0 mx-auto">
            {/* Sign in button  */}
            <button className="bg-cyan-300 text-zinc-800 px-6 py-2 rounded-l-md flex items-center space-x-2 hover:bg-teal-200 focus:outline-none">

                <span>Sign In</span>
            </button>

            {/* Sign up button */}
            <button className="bg-yellow-300 text-zinc-800 px-6 py-2 rounded-r-md flex items-center space-x-2 hover:bg-yellow-200 focus:outline-none">

                <span>Get Started</span>
            </button>
        </div>
    </>)
}



export default Navbar;

