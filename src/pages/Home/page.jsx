// Home.js
import React, {useState} from 'react';
import {BsStars} from "react-icons/bs";
import {FaCloudDownloadAlt} from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation';
import mainIcon from '../../assets/company/mainIconsdark.svg';
import Navigation from '../../components/navbar';
import ParticleBackground from '../../components/particleBackground';
import HeroSection from '../Hero/page';
import style from '../Home/home.module.css';
import Skills from '../Skills/page';


const Home = () =>
{

    const [activeNav, setActiveNav] = useState('#')
    return (
        <div className={`w-full h-full  text-white ${style.body} flex items-center justify-center flex-col`} id='home'>
            <Navigation />
            <ParticleBackground />
            <div className='flex items-center justify-between w-[85%] lg:h-[100vh] h-full  mx-auto flex-col lg:flex-row md:flex-row gap-6'>
                <div className='flex flex-col items-start justify-start w-full lg:w-[50%] md:w-[60%] gap-4'>
                    <div className={`${style.text} lg:w-[400px] lg:h-[53px] w-[300px] h-[45px] flex items-center justify-center rounded-xl gap-4 lg:mt-0 mt-24`}>
                        <div className='text-2xl'>
                            <BsStars />
                        </div>
                        <p>WELCOME TO MY PORTFOLIO</p>

                    </div>
                    <TypeAnimation
                        sequence={[
                            'I am a Fullstack Software Engineer',
                            1000,
                            'I am a React Developer',
                            1000,
                            'I am a Next Js Developer',
                            1000,
                            'I am a Web Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={40}
                        style={{fontSize: '45px', display: 'inline-block', fontWeight: "bold"}}
                        repeat={Infinity}
                    />
                    <p className="text-white text-sm lg:text-lg mt-4">
                        I'm{" "}
                        <span
                            style={{
                                color: "orange",
                            }}>
                            Kanishka Pasindu
                        </span>
                        , a seasoned{" "}
                        <span
                            style={{
                                color: "orange",
                            }}>
                            Frontend Developer
                        </span>{" "}
                        with one years of experience under my belt. Beyond the
                        professional facade, you may know me as{" "}
                        <span
                            style={{
                                color: "orange",
                            }}>
                            'Kpdev'
                        </span>{" "}
                        My journey in the realm of code is more than a career; it's a
                        passion. But there's more to me than just programming. I have an
                        insatiable love for technology, a fascination with the intricacies
                        of{" "}
                        <span
                            style={{
                                color: "orange",
                            }}>
                            design,
                        </span>{" "}
                        and an affinity for all things Apple. When I'm not crafting
                        elegant code, you'll find me engrossed in
                        <span
                            style={{
                                color: "orange",
                            }}>
                            TV series, grooving to music, and getting my adrenaline fix with
                            horror movies.
                        </span>
                    </p>
                    <div className='mt-10 flex items-start justify-center gap-4 lg:flex-row flex-col md:flex-row'>
                        <a href="#myProjects">
                            <button className='border border-white rounded-lg shadow-lg w-[200px] h-[40px]' onClick={() =>
                            {
                                setActiveNav('#myProjects')
                            }}>
                                My Projects
                            </button>
                        </a>
                        <button className='border border-white rounded-lg shadow-lg w-[200px] h-[40px] flex items-center justify-center gap-2'>
                            <FaCloudDownloadAlt className='text-2xl' />
                            My CV
                        </button>
                    </div>
                </div>
                <div className='lg:w-[50%] md:w-[60%] w-full flex items-center justify-center'>
                    <img src={mainIcon} alt="" />
                </div>
            </div>
            <div className='mt-10 md:mt-24'>
                <Skills />
            </div>
            <div className='mt-24 md:mt-36'>
                <HeroSection />
            </div>
        </div>
    );
};

export default Home;
