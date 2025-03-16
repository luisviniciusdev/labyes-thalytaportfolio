import { Skills } from "../components/Skills";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Hero } from "../components/Hero"
import { Recomendations } from "../components/Recomendations";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto">
      <Header/>
      <Hero/>
      <Skills/>
      <About/>
      <Recomendations/>
    </div>
  );
}
