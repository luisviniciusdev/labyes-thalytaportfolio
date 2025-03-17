import Image from "next/image"
import about from "../public/about.svg"

export function About() {
    return (
        <section className="py-30 px-20">
            <h2 id="sobre" className="text-5xl font-bold">Sobre mim</h2>
            <div className="mt-20 flex flex-row justify-around items-center">
                <div className="relative w-[400px] h-[300px]">
                    <Image 
                        src={about}
                        alt="Imagem de exemplo"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-[600]">
                    <p className="text-gray-600 text-xl mt-5">Sou <span className="text-[var(--primary-color)]">desenvolvedora front-end</span>, especializada em <span className="text-[var(--primary-color)]">React</span>, <span className="text-[var(--primary-color)]">Styled Components</span> e <span className="text-[var(--primary-color)]">Tailwind</span>, com foco em interfaces funcionais e responsivas para uma experiência de usuário otimizada. Atualmente, aprimoro meus conhecimentos em <span className="text-[var(--primary-color)]">TypeScript</span> para desenvolver código mais robusto e escalável.</p>  
                    <p className="text-gray-600 text-xl mt-5">Além do desenvolvimento, tenho experiência em <span className="text-[var(--primary-color)]">gestão de projetos</span> e <span className="text-[var(--primary-color)]">QA</span>, adquirida na LabYes, o que me proporcionou uma visão abrangente sobre qualidade de software, colaboração e <span className="text-[var(--primary-color)]">metodologias ágeis</span>. Possuo forte habilidade em <span className="text-[var(--primary-color)]">trabalho em equipe</span>, <span className="text-[var(--primary-color)]">resolução de problemas</span> e adaptação a desafios.</p>
                    <p className="text-gray-600 text-xl mt-5">Com formação em História e experiência como professora, busco <span className="text-[var(--primary-color)]">aprendizado contínuo</span> e estou sempre pronta para enfrentar novos desafios. Estou <span className="text-[var(--primary-color)]">aberta a novas oportunidades</span> que me permitam crescer profissionalmente e contribuir para projetos inovadores.</p>
                </div>
            </div>
        </section>
    )
}