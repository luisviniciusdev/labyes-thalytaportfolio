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
                    description="Na LabYes, atuei no desenvolvimento front-end, garantindo interfaces responsivas, acessíveis e otimizadas." 
                />

                <SkillCard 
                    icon={ClipboardList} 
                    title="Gestão de Projetos" 
                    description="Atuei na gestão de backlog e sprints, otimizando entregas alinhadas, mantendo uma comunicação objetiva." 
                />

                <SkillCard 
                    icon={Users} 
                    title="Coordenação de Sprints" 
                    description="Lidereis sprints ágeis coordenando projetos culturais, organizando entregas dentro dos prazos e objetivos estratégicos." 
                />
            </div>
        </section>
    )
}
