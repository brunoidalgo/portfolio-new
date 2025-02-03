import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
    const data = [
        {
            title: "Experiências",
            content: (
                <div className="flex flex-col gap-[30px]" id="resume">
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>SMARAPD</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Set 2024 - Até o momento
                        </span>
                        <p
                            className="font-lexend text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Garantia de qualidade nas entregas de software, contribuindo para a redução de falhas em produção em (60%), ao criar e manter casos de teste manuais e automatizados de regressão garantindo uma cobertura a nível de produto.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Compliance Fiscal</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Abril 2023 - Ago 2023
                        </span>
                        <p
                            className="text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Colaborei com a equipe de desenvolvimento utilizando Node.js, JavaScript, Cypress, Jira e metodologias ágeis (Kanban e Scrum), automatizando testes de software e criando casos de teste, o que aumentou a eficiência das entregas e a confiabilidade do sistema.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>CCM</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Nov 2022 - Ago 2023
                        </span>
                        <p
                            className="text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Apoiei o gerenciamento de ambientes de produção hospedados na nuvem (Oracle Cloud), utilizando VMware para acessar e atualizar aplicações, fornecendo suporte técnico para dúvidas e resolvendo problemas na infraestrutura do cliente, garantindo um SLA elevado.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Educação",
            content: (
                <div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Uninter</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Abil 2022 - Até o momento
                        </span>
                        <p
                            className="text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Análise e Desenvolvimento de Sistemas.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Voluntariado",
            content: (
                <div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Lacrei Saúde</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Mar 2024 - Maio 2024
                        </span>
                        <p
                            className="text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Liderei a área de QA em um projeto colaborativo, auxiliando a equipe na revisão e correção de casos de teste utilizando Cucumber e Cypress, o que aumentou a qualidade e a eficiência na execução dos testes.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[#f4f4f4] text-[2.4rem] font-[600] pb-4">
                            <Cover>Pipoca Ágil</Cover>
                        </h4>
                        <span className="text-zinc-400 my-[10px]">
                            Dez 2024 - Até o momento
                        </span>
                        <p
                            className="text-neutral-800 max-w-[450px] mt-2 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
                            Colaboro no desenvolvimento de um aplicativo mobile, aumentando a produtividade do time em (80%) ao implementar um backlog organizado no Jira, seguindo um design no Figma e os dados definidos na Lean Enception para manter alinhamento visual e funcional ao MVP.
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
