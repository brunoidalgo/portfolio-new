import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { Skills } from '@/components/Skills';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

const HeroSection = () => {
    return (
        <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">

            <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
                <a href="/">
                    <Image src="/images/logo.png" width={120} height={80} className="max-h-[80px] h-full object-contain object-center" alt="logo" />
                </a>
                <div className="flex flex-col justify-center h-[80%]">
                    <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        Bruno Empke, <br /> App & Mobile Fullstack <Cover>Engineer</Cover>
                    </h2>
                    <a href="#" className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]">
                        Meu CV
                    </a>

                    <div className="flex flex-row mt-[60px] ">
                        <AnimatedTooltip items={people} />
                    </div>
                    <p className="max-w-xl text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
                        Pessoas no meu time
                    </p>
                </div>
            </div>

            <div className="w-full h-full flex items-center bg-[#000]">
                <Image src="/images/imagembruno.jpg" width={800} height={1200} className="w-full max-h-[80vh] object-contain object-bottom rounded-lg" alt="model" />
            </div>

            <div className="w-[90%] mx-auto py-[30px] flex flex-col z-2">
                <a href="#" className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]">
                    Contate Me
                </a>

                <h2 className="bg-clip-text mt-[100px] text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
                    Sobre mim
                </h2>
                <p className="max-w-xl mx-auto md:text-base text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
                    Sou formado em Análise e Desenvolvimento de Sistemas e possuo sólida experiência no desenvolvimento de aplicativos utilizando Node, Next, TypeScript, React, React Native, Tailwind, MongoDB, PostgreSQL e Cypress
                </p>

                <p className="max-w-xl mx-auto md:text-base text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
                    Um dos meus projetos mais marcantes é o aplicativo que estou construindo como voluntário no Pipoca Ágil, voltado para o setor de saúde e criado para melhorar a qualidade de vida de pessoas com diabetes.
                </p>
                <Skills />
            </div>

            <ShootingStars className="z-[-1]" />
            <StarsBackground className="z-[-1]" />

        </div>
    )
}

export default HeroSection
