import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
    const data = [
        {
            title: "Experience",
            content: (
                <div className="flex flex-col gap-[30px]" id="resume">
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Aivy</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            April 2019 - At the moment
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            I'am a CTO & Full Stack Developer for a Micro SAAS company for build automating tests and help QA's around the world a building your automating tests in various diferents cenarios, languages and environments.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>SMARAPD</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            May 2023 - May 2024
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            Work as a Full Stack Developer
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            content: (
                <div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Uninter</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            April 2022 - At the moment
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            Analysis and Develoment Systems
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>USP</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            January 2025 - January 2026
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            MBA in Software Enginering
                        </p>
                    </div>

                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}
