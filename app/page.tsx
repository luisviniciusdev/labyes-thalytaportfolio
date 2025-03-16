import { Skills } from "@/components/Skills";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto">
      <Header/>
      <Skills/>
    </div>
  );
}
