import {FaGraduationCap} from "react-icons/fa";
import css from '../../assets/tech/css.png';
import gt from '../../assets/tech/git.png';
import html from '../../assets/tech/html.png';
import js from '../../assets/tech/javascript.png';
import mongo from '../../assets/tech/mongodb.png';
import node from '../../assets/tech/nodejs.png';
import react from '../../assets/tech/reactjs.png';
import tailwind from '../../assets/tech/tailwind.png';
import typescript from '../../assets/tech/typescript.png';


export default function Skills()
{
    return (
        <div className='w-[85%] h-[50vh] mx-auto flex items-center justify-center flex-col'>
            <div className="flex items-center justify-center gap-2">
                <FaGraduationCap className="text-6xl" />
                <h1 className='text-center text-6xl font-semibold'>Skills</h1>
            </div>
            <div className='w-[50%] mx-auto bg-white h-1 mt-2 rounded-xl'>

            </div>
            <div className='w-full h-full flex items-center justify-center'>

                <div className='grid lg:grid-cols-7 gap-9 place-items-center md:grid-cols-5 grid-cols-4'>
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                    <img src={css} alt="" className='w-[100px] h-[80px]' />
                    <img src={js} alt="" className='w-[100px] h-[80px]' />
                    <img src={react} alt="" className='w-[100px] h-[80px]' />
                    <img src={typescript} alt="" className='w-[100px] h-[80px]' />
                    <img src={tailwind} alt="" className='w-[100px] h-[80px]' />
                    <img src={node} alt="" className='w-[100px] h-[80px]' />
                    <img src={mongo} alt="" className='w-[100px] h-[80px]' />
                    <img src={gt} alt="" className='w-[100px] h-[80px]' />
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                    <img src={html} alt="" className='w-[100px] h-[80px]' />
                </div>
            </div>
        </div>
    )
}