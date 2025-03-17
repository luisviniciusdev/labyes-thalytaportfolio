import { Header } from "../components/Header";
import { Hero } from "../components/Hero"
import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Projects } from "@/components/Projects";
import { Recomendations } from "../components/Recomendations";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto">
      <Header/>
      <main>
        <Hero/>
        <Skills/>
        <About/>
        <Projects/>
        <Recomendations/>
      </main>
      <Footer/>
    </div>
  );
}
