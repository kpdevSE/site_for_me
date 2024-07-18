
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";

export default function BannerComponet()
{
    return (
        <Banner>
            <div className="flex w-full justify-between border-t p-4 dark:border-gray-600  relative text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                <div className="mx-auto flex items-center">
                    <p className="flex items-center text-whit font-bold text-md">
                        <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full ">
                            <MdPercent className="h-4 w-4" />
                        </span>
                        <span className="[&_p]:inline">
                            Get 5% discount per Now&nbsp; Contact Me!
                            <a
                                href="#contactme"
                                className="ml-0 flex items-center text-md font-medium text-white hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
                            >
                                Contact Me
                                <HiArrowRight className="ml-2" />
                            </a>
                        </span>
                    </p>
                </div>
                <Banner.CollapseButton color="white" className="border-0 bg-transparent text-white dark:text-gray-400">
                    <HiX className="h-4 w-4" />
                </Banner.CollapseButton>
            </div>
        </Banner>
    );
}
