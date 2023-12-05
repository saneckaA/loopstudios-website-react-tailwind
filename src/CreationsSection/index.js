import React from 'react';
import earthDesktop from '../images/desktop/image-deep-earth.jpg';
import earthMobile from '../images/mobile/image-deep-earth.jpg';
import arcadeDesktop from '../images/desktop/image-night-arcade.jpg';
import arcadeMobile from '../images/mobile/image-night-arcade.jpg';
import soccerDesktop from '../images/desktop/image-soccer-team.jpg';
import soccerMobile from '../images/mobile/image-soccer-team.jpg';
import gridDesktop from '../images/desktop/image-grid.jpg';
import gridMobile from '../images/mobile/image-grid.jpg';
import upDesktop from '../images/desktop/image-from-above.jpg';
import upMobile from '../images/mobile/image-from-above.jpg';
import pocketDesktop from '../images/desktop/image-pocket-borealis.jpg';
import pocketMobile from '../images/mobile/image-pocket-borealis.jpg';
import curiosityDesktop from '../images/desktop/image-curiosity.jpg';
import curiosityMobile from '../images/mobile/image-curiosity.jpg';
import fishDesktop from '../images/desktop/image-fisheye.jpg';
import fishMobile from '../images/mobile/image-fisheye.jpg';


const CreationsSection = () => {
    return (
        <section id="creations">
            <div className='px-5 container max-w-6xl mx-auto my-32 
            text-gray-900 md:px-0'>
                <div className='flex flex-row justify-center mb-20 items-center md:justify-between'>
                    <h2 className='text-4xl text-center md:text-left md:text-5xl uppercase font-bold'>
                        Our creations
                    </h2>
                    <button className='hidden btn md:block'>
                        See all
                    </button>
                </div>
                <div className='item-container'>
                    <div className='group item'>
                        <img src={earthDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={earthMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            Deep Earth
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={arcadeDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={arcadeMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            Night Arcade
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={soccerDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={soccerMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            Soccer Team VR
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={gridDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={gridMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            The Grid
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={upDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={upMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            From Up Above VR
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={pocketDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={pocketMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            Pocket Borealis
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={curiosityDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={curiosityMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            The Curiosity
                        </h5>
                    </div>
                    <div className='group item'>
                        <img src={fishDesktop} alt=""
                            className='hidden w-full duration-200 md:block group-hover:scale-110' />
                        <img src={fishMobile} alt=""
                            className='w-full md:hidden' />
                        <div className='item-gradient'></div>
                        <h5>
                            Make It Fisheye
                        </h5>
                    </div>
                </div>
                <div className='flex justify-center mt-10 md:hidden'>
                    <button className='btn w-full md:hidden'>See All</button>
                </div>
            </div>
        </section>
    )
}

export default CreationsSection;