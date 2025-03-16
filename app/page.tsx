import { Skills } from "../components/Skills";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Hero } from "../components/Hero"

export default function Home() {
  return (
    <div className="max-w-360 mx-auto">
      <Header/>
      <Hero/>
      <Skills/>
      <About/>
    </div>
  );
}
