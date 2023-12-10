import React, { useState } from 'react';
import logo from '../images/logo.svg';

const MainSection = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <section id="main">
            <div className='max-w-6xl mx-auto px-6 py-12'>
                <nav className='flex flex-row items-center justify-between font-bold text-white'>
                    <img src={logo} alt="" />
                    <div className='hidden h-10 font-alata md:flex  md:space-x-8'>
                        <div className='group'>
                            <a href="#">About</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group'>
                            <a href="#">Careers</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group'>
                            <a href="#">Events</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group'>
                            <a href="#">Products</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group'>
                            <a href="#">Support</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button id="menu-btn" type='button' onClick={toggleMenu} className={`${isOpen ? 'open' : ""} z-40 block hamburger md:hidden focus:outline-none`} >
                            <span className='hamburger-top'></span>
                            <span className='hamburger-middle'></span>
                            <span className='hamburger-bottom'></span>
                        </button>
                    </div>
                </nav>
                <div id="menu" className={`absolute top-0 bottom-0 left-0 flex-col self-end
                 w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white
                uppercase bg-black ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="#" className='hover:text-pink-500'>About</a>
                    <a href="#" className='hover:text-pink-500'>Careers</a>
                    <a href="#" className='hover:text-pink-500'>Events</a>
                    <a href="#" className='hover:text-pink-500'>Products</a>
                    <a href="#" className='hover:text-pink-500'>Support</a>
                </div>
                <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:padding-10 md:m-32 md:mx-0 md:text-6xl'>
                    Impresive experiences that deliver
                </div>
            </div>
        </section>
    )
}

export default MainSection;