import Image from "next/image";
import hero from "../public/hero.png"
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-[var(--bg-shade)] py-30 px-20 flex flex-row justify-around items-center">
            <div className="max-w-150">
                <p className="text-xl">Olá, eu sou a Thalyta Rangel</p>
                <h1 className="text-6xl font-bold mt-5">Crio websites e <span className="text-[var(--primary-color)]">experiência de marca</span></h1>
                <p className="text-2xl mt-5">Transformo ideias em designs envolventes e funcionais que conectam sua marca ao público certo.</p>
                
                <div className="mt-12 flex gap-5">
                    <Link href="https://www.linkedin.com/in/thalyta-rangel-341b44161/" target="_blank">
                        <Button 
                            className="cursor-pointer border border-[var(--primary-color)] bg-[var(--primary-color)] text-white hover:text-[var(--primary-color)] 
                            hover:bg-white hover:border-[var(--primary-color)] transition-colors duration-300"
                        >
                            LinkedIn
                        </Button>
                    </Link>
                    <Link href="https://github.com/ThalytaRangel" target="_blank">
                        <Button 
                            variant={"outline"} 
                            className="cursor-pointer border-[var(--primary-color)] text-[var(--primary-color)] 
                            hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-300">
                            GitHub
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="relative w-[600px] h-[450px]">
                    <Image 
                        src={hero}
                        alt="Imagem de exemplo"
                        fill
                        className="object-cover"
                    />
                </div>
        </section>
    )
}