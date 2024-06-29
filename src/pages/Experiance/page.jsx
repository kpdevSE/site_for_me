import { FaUserGraduate } from "react-icons/fa";
import lakionImage from '../../assets/lakion.png'
import flexyCodeImage from '../../assets/flexycode.png'


export default function Experiance()
{
    return (
        <div id="experiance" className="w-[85%] mx-auto h-full mt-24">
            <div className="flex items-center justify-center text-white lg:text-4xl gap-3 font-semibold text-2xl w-full">
                <FaUserGraduate />
                <h1>My Experiances</h1>
            </div>
            <div className="w-[50%] mx-auto bg-gray-700 h-1 mt-2 rounded-xl"></div>

            <div className="mt-24 flex flex-col items-center justify-center gap-5">
                <div className="relative flex bg-clip-border rounded-xl shadow-md w-full max-w-[48rem] lg:flex-row md:flex-col flex-col text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <div
                        className="relative lg:w-2/5 md:w-full md:h-[300px] w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img
                            src={lakionImage}
                            alt="Lakion" className="lg:object-cover object-cover md:object-none w-full h-full" />
                    </div>
                    <div className="p-6">
                        <h6
                            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white uppercase">
                            Lakion
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Full Stack Software Engineer-Intern
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                            work as a Fullstack interner. i worked with a CRM system using Next js,Prisma and MySql.my goal was completing that task during the internship.i did that task successfully.
                        </p>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-start gap-1 p-1 font-extrabold">
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Next Js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Prisma ORM
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                React Js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Node js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Express JS
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Mongo DB
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative flex bg-clip-border rounded-xl shadow-md w-full max-w-[48rem] lg:flex-row md:flex-col flex-col text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <div
                        className="relative lg:w-2/5  w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                        <img
                            src={flexyCodeImage}
                            alt="Flexycode" className="lg:object-cover object-cover md:object-none  w-full h-full md:h-[400px]" />
                    </div>
                    <div className="p-6">
                        <h6
                            className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white uppercase">
                            FlexyCode
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Full Stack Software Engineer-Intern
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white">
                            work as a Fullstack interner. i worked with a Management system using React js,Node Js ,Express Js and Mongo DB.my goal was completing that task during the internship.i did that task successfully.
                        </p>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-start gap-1 p-1 font-extrabold">
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Next Js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Prisma ORM
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                React Js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Node js
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Express JS
                            </button>
                            <button
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gradient-to-r from-gray-900 via-gray-500 to-white active:bg-gray-900/20"
                                type="button">
                                Mongo DB
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}