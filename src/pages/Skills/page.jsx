import {FaGraduationCap} from "react-icons/fa";
import bootstrap from '../../assets/tech/bootstrap.png';
import css from '../../assets/tech/css.png';
import express from '../../assets/tech/express-js-icon.png';
import gt from '../../assets/tech/git.png';
import github from '../../assets/tech/github.png';
import html from '../../assets/tech/html.png';
import js from '../../assets/tech/javascript.png';
import mongo from '../../assets/tech/mongodb.png';
import mysql from '../../assets/tech/mysql.png';
import node from '../../assets/tech/nodejs.png';
import php from '../../assets/tech/php.png';
import next from '../../assets/tech/png-transparent-next-js-hd-logo-removebg-preview.png';
import prisma from '../../assets/tech/png-transparent-prisma-hd-logo-thumbnail-removebg-preview.png';
import react from '../../assets/tech/reactjs.png';
import tailwind from '../../assets/tech/tailwind.png';
import typescript from '../../assets/tech/typescript.png';
import vscode from '../../assets/tech/visual-studio-code-icon.png';
import windows from '../../assets/tech/windows-10-icon.png';


export default function Skills()
{
    return (
        <div className='w-[85%] h-full lg:h-[40vh] md:h-full mx-auto flex items-center justify-center flex-col' id="skills">
            <div className="flex items-center justify-center gap-2">
                <FaGraduationCap className="lg:text-5xl text-3xl" />
                <h1 className='text-center lg:text-5xl text-3xl font-semibold'>Skills</h1>
            </div>
            <div className='w-[50%] mx-auto bg-gray-700 h-1 mt-2 rounded-xl'>

            </div>
            <div className='w-full h-full mt-10'>
                <div className='grid lg:grid-cols-9 gap-9 place-items-center md:grid-cols-6 grid-cols-3'>
                    <img src={html} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={css} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={js} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={react} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={typescript} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={tailwind} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={windows} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={node} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={mongo} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={gt} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={next} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={prisma} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={bootstrap} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={mysql} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={php} alt="" className='lg:w-[100px] lg:h-[80px ] w-[70px] h-[55px]' />
                    <img src={github} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={express} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                    <img src={vscode} alt="" className='lg:w-[100px] lg:h-[80px] w-[70px] h-[55px]' />
                </div>
            </div>
        </div>
    )
}