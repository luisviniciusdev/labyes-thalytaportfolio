import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { SquareTerminal } from "lucide-react";
import Link from "next/link";


export function Header() {
    return (
        <Card className="max-w-full rounded-none py-10 px-20 flex-row items-center justify-between">
                <SquareTerminal size={40}/>

                <nav>
                    <ul className="flex gap-5">
                        <Link href="#home"><li className="cursor-pointer text-[var(--heading-color)] hover:text-[var(--primary-color)] transition-colors duration-300">Home</li></Link>
                        <Link href="#sobre"><li className="cursor-pointer text-[var(--heading-color)] hover:text-[var(--primary-color)] transition-colors duration-300">Sobre</li></Link>
                        <Link href="#projetos"><li className="cursor-pointer text-[var(--heading-color)] hover:text-[var(--primary-color)] transition-colors duration-300">Projetos</li></Link>
                        <Link href="#recomendacoes"><li className="cursor-pointer text-[var(--heading-color)] hover:text-[var(--primary-color)] transition-colors duration-300">Recomendações</li></Link>
                    </ul>
                </nav>

                <Button variant="outline" className="cursor-pointer border-[var(--primary-color)] text-[var(--primary-color)] 
  hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300">Entre em contato</Button>
        </Card>
    )
}
