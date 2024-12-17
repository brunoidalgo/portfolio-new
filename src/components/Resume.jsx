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
                            <Cover>Freelancer</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            April 2019 - At the moment
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            I using my skills for develop web and mobile aplcations focused in a bussines solutions like a financial administrative and helthy activities.

                            At the moment i contribuit for develop a app for help people with a diabets for control your day and your mediciines with a insights and dashboards for growth your helthy and a life quality.
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
                            I lead the automation project from scratch with Cypress for automated tests, initially regression tests and smoke tests, I help other QA's on the team with questions and suggestions about automation.

                            Project also aims to implement CI/CD on an automated conveyor belt, carrying out tests in headless mode and cross-browser for greater coverage.

                            Mapping requirements for automated tests in the main routines of the WEB system.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Compliance Fiscal</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            April 2023 - Aug 2023
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            Using technologies such as: NodeJs, Javascript, Cypress, Jira, Kanban and Scrum, I supported the development team to create and automate software tests daily, as well as supporting the creation of test cases, documentation and training for other co-workers to learn. about Cypress.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>CCM</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            Nov 2022 - Aug 2023
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            I supported the management of customer production environments using VM Ware to access machines hosted in the Cloud, update the application and then provide support and support for queries and possible problems arising from the same.
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
                            System analysis and development, Systems Engineering
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
