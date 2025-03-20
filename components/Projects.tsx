import { Project } from "./Project";

export function Projects() {
    return (
        <section id="projetos" className="py-30 px-20">
            <h2 id="sobre" className="text-5xl font-bold">Projetos que colaborei</h2>
            <div className="mt-20 flex flex-row gap-8">
                <Project 
                    imgUrl="rk_logo.svg"
                    title="RK Imóveis"
                    description="Landing pages para corretores, com design e funcionalidades que facilitam a interação com clientes e destacam ofertas."
                    deployLink="https://rklp-tom.netlify.app/"
                />
                <Project 
                    imgUrl="lablinks_logo.svg"
                    title="Lab Links"
                    description="Projeto para valorizar voluntários do Lab Yes!, evidenciando sua contribuição no sucesso das iniciativas."
                    deployLink="https://lab-links.netlify.app/"
                />
                <Project 
                    imgUrl="labyes_logo.svg"
                    title="Site Lab Yes!"
                    description="Site oficial do Lab Yes!, criado internamente para divulgar projetos e iniciativas."
                    deployLink="https://labyes-lp-git-868c8h01k-googleanalytics-dam450s-projects.vercel.app/"
                />
            </div>
        </section>
    )
}