import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Menu = () => {
    const MenuTitles = [{
        "title": 'Home',
        "link": '/'
    },
    {
        "title": 'About us',
        "link": '/about'
    },
    {
        "title": 'Gallery',
        "link": '/gallery'
    },
    {
        "title": 'Contact us',
        "link": '/contact'
    }];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);
    return (
        <div className="z-20 w-[100%]">
            <div className='flex justify-between items-center w-[100%]'>
                <div className='text-2xl font-extrabold text-cyan-200 leading-6'>AMEEN CORPS <div className='font-extrabold text-cyan-800'>STRUCTURES.</div></div>
                <div className='gap-6 uppercase font-extrabold text-gray-500 items-center hidden md:flex'>
                    {MenuTitles.map((menu) => (
                        <div className='hover:text-yellow-300 cursor-pointer'>{menu.title}</div>
                    ))}
                    <button className='bg-white p-2 px-5 rounded-full text-white uppercase hover:text-sky-700'>Client Portal</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <HiOutlineMenuAlt3 className='text-xl' />
                    </button>
                </div>
            </div>
            <div ref={menuRef} className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
                <div className="rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 ">
                    {
                        MenuTitles.map((data, index) => (
                            <Link to={`${data.link}`} key={index} className='block py-2 px-4 text-black hover:bg-gray-100'>{data.title}</Link>
                        ))
                    }
                </div>
                <Link to='/portal' className='border border-[#EEB708] text-sm py-1 px-4 rounded-full float-right bg-[#EEB708] text-black my-2'>Get in touch</Link>
            </div>
        </div>
    )
}

export default Menu