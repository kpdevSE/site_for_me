import { FaUserGraduate } from "react-icons/fa";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { Badge } from "flowbite-react";

export default function Experiance()
{
    return (
        <div id="experiance" className="w-[85%] mx-auto h-full mt-10 z-auto">
            <div className="flex items-center justify-center text-white lg:text-4xl gap-3 font-semibold text-2xl w-full">
                <FaUserGraduate />
                <h1>My Experiances</h1>
            </div>
            <div className="w-[50%] mx-auto bg-gray-700 h-1 mt-2 rounded-xl"></div>
            <div className="lg:mt-24 mt-16 flex items-center justify-center w-full z-0">
                <Timeline className="z-0">
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className="text-lg font-bold">February 2023 - Augest 2023</Timeline.Time>
                            <Timeline.Title className="text-white">FLEXY CODE</Timeline.Title>
                            <Timeline.Title className="text-white text-xl">Software Engineer Intern</Timeline.Title>
                            <Timeline.Body>
                                i coded as a fullstack software engineer in this company.i used mern stack technology and i had to implement a system 's frontend . i learn HTML ,CSS ,JS ,React js for the main languages and Node js ,express js are the extra languages
                            </Timeline.Body>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="info" size="sm">
                                    HTML
                                </Badge>
                                <Badge color="gray" size="sm">
                                    CSS
                                </Badge>
                                <Badge color="failure" size="sm">
                                    JAVASCRIPT
                                </Badge>
                                <Badge color="success" size="sm">
                                    REACT JS
                                </Badge>
                                <Badge color="warning" size="sm">
                                    NEXT JS
                                </Badge>
                                <Badge color="indigo" size="sm">
                                    TAILWIND CSS
                                </Badge>
                                <Badge color="purple" size="sm">
                                    NODE JS
                                </Badge>
                                <Badge color="pink" size="sm">
                                    EXPRESS JS
                                </Badge>
                            </div>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className="text-lg font-bold">Octomber 2023 - January 2024</Timeline.Time>
                            <Timeline.Title className="text-white">LAKION</Timeline.Title>
                            <Timeline.Title className="text-white text-xl">Software Engineer Intern</Timeline.Title>
                            <Timeline.Body>
                                I work as a Fullstack interner. i worked with a CRM system using Next js,Prisma and MySql.my goal was completing that task during the internship.i did that task successfully.
                            </Timeline.Body>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="info" size="sm">
                                    HTML
                                </Badge>
                                <Badge color="gray" size="sm">
                                    CSS
                                </Badge>
                                <Badge color="failure" size="sm">
                                    JAVASCRIPT
                                </Badge>
                                <Badge color="success" size="sm">
                                    REACT JS
                                </Badge>
                                <Badge color="warning" size="sm">
                                    NEXT JS
                                </Badge>
                                <Badge color="indigo" size="sm">
                                    TAILWIND CSS
                                </Badge>
                                <Badge color="purple" size="sm">
                                    NODE JS
                                </Badge>
                                <Badge color="pink" size="sm">
                                    EXPRESS JS
                                </Badge>
                            </div>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className="text-lg font-bold">February 2022 - PRESENT</Timeline.Time>
                            <Timeline.Title className="text-white">STUDENT COUNCIL in ICBT GAMAPAHA CAMPUS</Timeline.Title>
                            <Timeline.Title className="text-white text-xl">PRESIDENT</Timeline.Title>
                            <Timeline.Body>
                                I work as a President of student council in ICBT Campus Gampaha.i do many events with my team to give enjoy the students.it is helping me toimprove my leadership skill and how i will face to critical option.
                            </Timeline.Body>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="purple" size="sm">
                                    LEADERSHIP
                                </Badge>
                                <Badge color="pink" size="sm">
                                    TIME MANAGEMENT
                                </Badge>
                                <Badge color="indigo" size="sm">
                                    TEAM MANAGEMENT
                                </Badge>
                                <Badge color="success" size="sm">
                                    COMMUNICATION
                                </Badge>
                                <Badge color="warning" size="sm">
                                    PLANING
                                </Badge>
                            </div>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    )
}