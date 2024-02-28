
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {FaFacebook, FaInstagramSquare} from "react-icons/fa";
import {FaAddressCard, FaLinkedin} from "react-icons/fa6";

import {FaMobileAlt} from "react-icons/fa";
import {MdMarkEmailRead} from "react-icons/md";
import image from '../../assets/sample 02.jpg';
import FormCom from "../../components/form";

export default function ContactUs()
{
    return (
        <div className="w-[85%] mx-auto lg:h-[100vh] h-full " id='contactme'>
            <div className='w-full text-center lg:text-5xl text-3xl font-semibold flex items-center justify-center gap-2'>
                <BsFillTelephoneForwardFill />
                <h1 className='text-center lg:text-5xl text-3xl font-semibold'>Contact Me</h1>
            </div>
            <div className='w-[50%] mx-auto bg-gray-700 h-1 mt-2 rounded-xl'>
            </div>
            <div className='w-full h-full flex items-center justify-between lg:flex-row  flex-col gap-4'>
                <div className='lg:w-[50%] w-full flex flex-col gap-2'>
                    <div className='flex items-center justify-center'>
                        <img src={image} alt="" className=' rounded-2xl  w-[300px] h-[400px]' />
                    </div>
                    <div className='flex items-center justify-center gap-2 mt-10'>
                        <FaAddressCard className="lg:text-lg text-md" />
                        <p className="lg:text-lg text-md">Address :- No,104/25, Medemulla, Minuwangoda</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <FaMobileAlt className="lg:text-lg text-md" />
                        <p className="lg:text-lg text-md">Mobile :- 077 289 4815 / 071 564 4565</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <MdMarkEmailRead className="lg:text-lg text-md" />
                        <p className="lg:text-lg text-md">Email :- kanishkapasindu6@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-3xl transition-all mt-10'>
                        <a href="https://www.linkedin.com/in/kanishka-pasindu-b976a8252/" target="_blank" rel="noreferrer" className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'><FaLinkedin /></a>
                        <a href="https://www.facebook.com/stephan.wick.54/" target="_blank" rel="noreferrer" className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'><FaFacebook /></a>
                        <a href="https://www.instagram.com/_kanishka_pasindu_/?hl=en" target="_blank" rel="noreferrer" className='hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'><FaInstagramSquare /></a>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <FormCom />
                </div>
            </div>
        </div>
    );
};