import { RecommendationCard } from "./RecommendationCard";

export function Recomendations() {
    return (
        <section id="recomendacoes" className="py-30 px-20 bg-[var(--bg-shade)]">
            <h2 className="text-5xl font-bold">Recomendações</h2>
            <div className="mt-20 flex flex-row justify-between gap-8">
                <RecommendationCard
                    text="Thalyta é organizada, centrada e comunicativa, qualidades que a tornam uma líder ideal para projetos eficientes e colaborativos."
                    imgUrl="/luis.jpg"
                    imgFallback="LV"
                    recommenderName="Luís Vinícius"
                    recommenderPosition="Desenvolvedor Front-end"
                    linkedinUrl="https://www.linkedin.com/in/luisviniciuscerq/"
                />
                <RecommendationCard
                    text="Trabalhar com Thalyta é maravilhoso, profissional incrível. Tem capacidade de planejar e construir uma aplicação de ponta a ponta."
                    imgUrl="/daiane.jpg"
                    imgFallback="DF"
                    recommenderName="Daiane Farias"
                    recommenderPosition="ServiceNow Developer"
                    linkedinUrl="https://www.linkedin.com/in/daiaanebarbosaf/"
                />
                <RecommendationCard
                    text="Recomendo fortemente a Thalyta Rangel, pois além de ser uma programadora excepcional, apresenta imprescindíveis habilidades de comunicação e oratória!"
                    imgUrl="/cristian.jpg"
                    imgFallback="CS"
                    recommenderName="Cristian Sbardelotto"
                    recommenderPosition="Desenvolvedor Front-end"
                    linkedinUrl="https://www.linkedin.com/in/cristian-k-sbardelotto/"
                />
            </div>
        </section>
    )
}