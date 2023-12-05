import React from 'react';
import logo from '../images/logo.svg';
import insta from '../images/icon-instagram.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';

const Footer = () => {
    return (
        <footer id="footer">
            <div className='bg-black mt-8 pt-6 pb-10 px-8 flex flex-col items-start 
                  justify-center space-y-4 md:flex-row md:justify-between md:space-y-0 '>
                <div className='flex flex-col space-y-6 items-center md:items-start text-white'>
                    <img className='w-44' src={logo} alt="" />
                    <div className='flex flex-col items-center space-y-2 md:flex-row 
                    md:space-x-4 md:space-y-0 text-sm font-bold '>
                        <div className='group h-10'>
                            <a href="#">About</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group h-10'>
                            <a href="#">Careers</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group h-10'>
                            <a href="#">Events</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group h-10'>
                            <a href="#">Products</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                        <div className='group h-10'>
                            <a href="#">Support</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 text-white'>
                    <div className='justify-center md:justify-end flex flex-row space-x-4'>
                        <div className='group h-8'>
                            <a href="#">
                                <img className='h-6' src={facebook} alt="" />
                            </a>
                        </div>
                        <div className='group h-8'>
                            <a href="#">
                                <img className='h-6' src={twitter} alt="" />
                            </a>
                        </div>
                        <div className='group h-8'>
                            <a href="#">
                                <img className='h-6' src={pinterest} alt="" />
                            </a>
                        </div>
                        <div className='group h-8'>
                            <a href="#">
                                <img className='h-6' src={insta} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='font-bold text-xs text-gray-500'>&copy; 2023 Loopstudios. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;