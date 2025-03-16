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
                    <p className="text-gray-600 text-xl mt-5">Sou desenvolvedora front-end, especializada em React, Styled Components e Tailwind, com foco em interfaces funcionais e responsivas para uma experiência de usuário otimizada. Atualmente, aprimoro meus conhecimentos em TypeScript para desenvolver código mais robusto e escalável.</p>  
                    <p className="text-gray-600 text-xl mt-5">Além do desenvolvimento, tenho experiência em gestão de projetos e QA, adquirida na LabYes, o que me proporcionou uma visão abrangente sobre qualidade de software, colaboração e metodologias ágeis. Possuo forte habilidade em trabalho em equipe, resolução de problemas e adaptação a desafios.</p>
                    <p className="text-gray-600 text-xl mt-5">Com formação em História e experiência como professora, busco aprendizado contínuo e estou sempre pronta para enfrentar novos desafios. Estou aberta a novas oportunidades que me permitam crescer profissionalmente e contribuir para projetos inovadores.</p>
                </div>
            </div>
        </section>
    )
}