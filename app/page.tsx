import { Skills } from "@/components/Skills";
import { Header } from "../components/Header";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto">
      <Header/>
      <Skills/>
      <About/>
    </div>
  );
}
