import { Card } from "./ui/card";
import linkedin from "../public/linkedin_icon.svg"
import github from "../public/github_icon.svg"
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer>
            <Card className="flex flex-row rounded-none justify-around items-center shadow-none border-none">
                <span>2025 @ Todos os direitos reservados.</span>
                <span>Feito por <Link href="https://github.com/luisviniciusdev" target="_blank" className="text-[var(--primary-color)]">Luís Vinícius</Link></span>
                <div className="flex flex-row gap-4">
                    <Link href="https://www.linkedin.com/in/thalyta-rangel-341b44161/" target="_blank" className="relative w-10 h-10">
                        <Image 
                            src={linkedin}
                            alt="Imagem de exemplo"
                            fill
                            className="object-cover"
                        />
                    </Link>
                    <Link href="https://github.com/ThalytaRangel" target="_blank" className="relative w-10 h-10">
                        <Image 
                            src={github}
                            alt="Imagem de exemplo"
                            fill
                            className="object-cover"
                        />
                    </Link>
                </div>
            </Card>
        </footer>
    )
}