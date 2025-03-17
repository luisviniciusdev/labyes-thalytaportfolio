import { Skills } from "../components/Skills";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Hero } from "../components/Hero"
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
        <Recomendations/>
      </main>
      <Footer/>
    </div>
  );
}
