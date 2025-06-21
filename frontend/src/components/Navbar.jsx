import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar'
import { useState, useRef, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const Navbar = ({ changeLayout, isGridLayout }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const profileRef = useRef(null);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
                <div className="logo">
                    <img className="w-[150px] cursor-pointer" src={logo} alt="Logo" />
                </div>
                <div className='flex items-center gap-4'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Services</Link>
                    <div ref={profileRef}>
                        <Avatar name="John Doe" size="40" round="50%" className="cursor-pointer ml-2" onClick={toggleProfile} />
                        {isProfileOpen && <div className='h-48 w-44 rounded-md bg-[#1A1919] fixed top-16 right-24 px-4 py-6 text-wrap'>
                            <h3 className='text-2xl pb-3 mb-2 border-b-2'>John Doe</h3>
                            {isDarkMode ?
                                <span className='flex items-center gap-2 my-3'><MdLightMode /><p className='cursor-pointer text-xl' onClick={toggleDarkMode}>Light Mode</p> </span>
                                : <span className='flex items-center gap-2 my-3'><MdDarkMode /><p className='cursor-pointer text-xl' onClick={toggleDarkMode}>Dark Mode</p> </span>}
                            {isGridLayout ?
                                <span className='flex items-center gap-2 my-3'><FaThList className='size-4' /><p className='cursor-pointer text-xl' onClick={changeLayout}>List View</p> </span>
                                : <span className='flex items-center gap-2 my-3'><BsFillGridFill /><p className='cursor-pointer text-xl' onClick={changeLayout}>Grid View</p> </span>}
                        </div>}
                    </div>

                </div>
            </div >

        </>
    )
}

export default Navbar