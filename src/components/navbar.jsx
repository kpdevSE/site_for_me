import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaGraduationCap, FaHamburger } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import myLogo from '../assets/mylog.png';


export default function Navigation()
{
    const [open, setOpen] = useState(false)
    const [activeNav, setActiveNav] = useState('#')

    return (
        <div className='w-[85%] mx-auto h-[30px] fixed top-0 z-50'>
            <div className='w-[85%] mx-auto h-[50px] flex items-center justify-between px-1 mt-10'>
                <div>
                    <img src={myLogo} alt="" />
                </div>
                <div className='lg:block hidden md:hidden'>
                    <ul className='flex items-center gap-10 lg:text-xl md:text-lg font-semibold'>
                        <li className={activeNav === '#' ? 'active' : ''}><a href="#home" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#home')}><IoHome />Home</a></li>
                        <li><a href="#skills" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#skills')}><FaGraduationCap />Skills</a></li>
                        <li><a href="#myProjects" onClick={() => setActiveNav('#myProjects')} className='flex items-center justify-center gap-2'>                <GrProjects />My Projects</a></li>
                        <li><a href="#experiance" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#experiance')}><FaUserGraduate />Experiances</a></li>
                        <li><a href="#contactme" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#contactme')}><BsFillTelephoneForwardFill />Contact Me</a></li>
                    </ul>
                </div>
                <div className=' text-white text-2xl hover:cursor-pointer lg:hidden md:block' onClick={() =>
                {
                    setOpen(true)
                }}><FaHamburger /></div>
            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className={`fixed inset-0 overflow-hidden`}>
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md ">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">

                                            </div>
                                        </Transition.Child>
                                        <div className={`flex h-full flex-col  py-6 bg-gradient-to-r from-[rgba(1,0,5,1)] via-[rgba(9,9,69,1)] to-[rgba(0,0,8,1)] shadow-xl overflow-y-hidden`}>
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    <div className='flex items-center justify-between'>
                                                        <img src={myLogo} alt="" />
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <ul className='flex items-start gap-10 text-xl font-semibold flex-col text-white'>
                                                    <li onClick={() => setOpen(false)}><a href="#home" onClick={() => setActiveNav('#')} className='flex items-center justify-center gap-2' ><IoHome />Home</a></li>
                                                    <li onClick={() => setOpen(false)}><a href="#skills" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#skills')}><FaGraduationCap />Skills</a></li>
                                                    <li onClick={() => setOpen(false)}><a href="#myProjects" onClick={() => setActiveNav('#myProjects')} className='flex items-center justify-center gap-2'><GrProjects />My Projects</a></li>
                                                    <li onClick={() => setOpen(false)}><a href="#contactme" className='flex items-center justify-center gap-2' onClick={() => setActiveNav('#contactme')}><BsFillTelephoneForwardFill />Contact Me</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
