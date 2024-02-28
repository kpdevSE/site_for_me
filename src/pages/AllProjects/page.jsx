import {useState} from "react";
import CountUp from 'react-countup';
import {FaArrowRight} from "react-icons/fa";

export default function Projects()
{
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div className="w-[85%] h-full mx-auto">
            <div className="flex lg:items-start lg:justify-between gap-4 lg:flex-row flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col lg:items-start md:items-start items-center lg:w-[30%] w-full md:w-[30%]">
                    <p className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg">Number Speaks</p>
                    <div className="flex flex-col leading-none">
                        <p className="mt-10 lg:text-4xl md:text-3xl text-4xl">We Are Always Ready </p>
                        <p className="lg:text-4xl md:text-3xl text-4xl">For a <span className="text-orange-200">Challenges</span></p>
                    </div>
                    <a href="#home" className={activeNav === '#' ? 'active' : ''}>
                        <button className='border border-white rounded-lg shadow-lg w-[200px] h-[40px] mt-10 flex items-center justify-center gap-2' onClick={() => setActiveNav('#home')}><FaArrowRight />Learn More</button>
                    </a>
                </div>
                <div className="flex items-center justify-start gap-3 md:flex-col flex-col lg:flex-row lg:w-[70%] md:w-[70%] w-full lg:mt-0 md:mt-0 mt-16">
                    <div className="flex flex-col lg:items-start md:items-start items-center gap-2">
                        <p className="text-white font-semibold text-3xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-2 rounded-lg">Successful Projects</p>
                        <div className="bg-gray-200 w-[85%] h-[1px]">

                        </div>
                        <p className="text-lg mt-10 lg:text-start md:text-start text-center">Since its establishment in 2000, Brook Creative has been focusing on project management & implementation through cooperation.</p>
                    </div>
                    <p className="text-[70px] font-serif"><CountUp delay={4} end={30} />+</p>
                </div>
            </div>

        </div>
    )
}