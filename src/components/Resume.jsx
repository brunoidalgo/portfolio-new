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
                            <Cover>SMARAPD</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            Sep 2023 - at the moment
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            I lead the automation project from scratch with Cypress for automated tests, initially regression tests and smoke tests, I help other QA's on the team with questions and suggestions about automation.
                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">Project also aims to implement CI/CD on an automated conveyor belt, carrying out tests in headless mode and cross-browser for greater coverage.</p>

                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">Mapping requirements for automated tests in the main routines of the WEB system.</p>
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
        {
            title: "Volunteer",
            content: (
                <div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Lacrei Saúde</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            May 2024 - Jun 2024
                        </span>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            Along with QA's time, I implemented a test automation flow via Github Actions, reviewing, updating and creating automation scripts in Cypress that validate all main and secondary routines of the system from end to end whenever a pull request is made and/or a push to the main branch.
                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">This automation has been renewed in both the production environment and the approval environment.</p>


                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">Use libraries such as (cypress-xpath, cypress-mailosaur, cypress-slow-down and @faker-js/faker) to facilitate and increase test coverage. I also used the Page Objects Model concept in Cypress to separate all system endpoints (URL) into two JSON files, one for the production environment and the other for Approval.</p>


                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">We are able to implement an effective CI/CD that detects failures and configurations before the customer requests us, making the process proactive and no longer reactive.</p>


                            <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8"> Technologies, tools and Frameworks used: Scrum, Kanban, Agile Methodologies, Javascript, Cypress and NodeJs.</p>


                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Pipoca Ágil</Cover>
                        </h4>
                        <span className="text-blue-400 my-[10px]">
                            Dec 2024 - at the moment
                        </span>
                        <p className="text-neutral-800 max-w-[400px] mt-4 dark:text-neutral-200 text-xs md:text-lg font-normal mb-2">Key responsability:</p>
                        <p
                            className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
                            - Is follow the figma design and create a solutions for get more features for IOS and Android users by using a React Native framework, for give the users a new way to control his day. And i'am a leader for the mobile app development.
                        </p>

                        <p className="text-neutral-800 max-w-[400px] dark:text-neutral-200 text-xs md:text-lg font-normal mb-2">
                            Our goal:
                        </p>
                        <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">

                            - Develop a app for help a people have a diabets for control our medicines and get more helthy with a dashboards and recommendations for growth your routine with a system for control your diabets.
                        </p>
                        <p className="text-neutral-800 max-w-[400px] dark:text-neutral-200 text-xs md:text-lg font-normal mb-2">Version control and colaboration:</p>
                        <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">

                            - Worked with Git and GitHub, following the Gitflow workflow to efficiently manage code versioning and collaborate with other team members.
                        </p>
                        <p className="text-neutral-800 max-w-[400px] dark:text-neutral-200 text-xs md:text-lg font-normal mb-2">Agile Methodologies:</p>
                        <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">

                            - Actively participated in agile methodologies, such as Scrum and Kanban, to ensure iterative deliveries and continuous alignment with the needs of the development community.
                        </p>
                        <p className="text-neutral-800 max-w-[400px] dark:text-neutral-200 text-xs md:text-lg font-normal mb-2">Code:</p>
                        <p className="text-neutral-800 max-w-[400px] mt-2 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">

                            - We using a React Native with Expo and Firebase for build this App from scratch to MVP.
                        </p>


                        This app develop using a: React Native, Typescript, Expo, Scrum, Kanban, Jira, Tailwind CSS and Firebase

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
