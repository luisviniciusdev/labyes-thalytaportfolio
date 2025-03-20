import { SkillCard } from "./SkillCard";
import { Code, ClipboardList, MessageCircle, Users } from "lucide-react";

export function Skills() {
    return (
        <section className="py-30 px-20">
            <h2 className="text-5xl font-bold">Minhas habilidades</h2>
            <div className="mt-20 flex flex-row gap-8">
                <SkillCard 
                    icon={Code} 
                    title="Desenvolvimento Web" 
                    description="No Lab Yes!, atuei como desenvolvedora front-end, garantindo interfaces responsivas, acessíveis e otimizadas." 
                />

                <SkillCard 
                    icon={ClipboardList} 
                    title="Gestão de Projetos" 
                    description="Atuei na gestão de backlog e sprints, otimizando entregas alinhadas, mantendo uma comunicação objetiva." 
                />

                <SkillCard 
                    icon={Users} 
                    title="Planejamento Ágil" 
                    description="Liderei sprints ágeis em projetos culturais, coordenando entregas dentro dos prazos e alinhadas aos objetivos estratégicos." 
                />
            </div>
        </section>
    )
}
