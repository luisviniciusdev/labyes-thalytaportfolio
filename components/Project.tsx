import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    imgUrl: string;
    title: string;
    description: string;
    deployLink: string;
}

export function Project({ imgUrl, title, description, deployLink}: ProjectProps) {
    return (
        <Card className="p-8 bg-[var(--bg-shade)] hover:border-bottom-[var(--primary-color)] shadow-xl gap-0 max-w-[400px] flex flex-col justify-between">
            <div className="relative w-35 h-35 my-0 mx-auto">
                <Image 
                    src={imgUrl}
                    alt={`Imagem do projeto ${title}`}
                    title={`Projeto ${title}`}
                    fill
                    className="object-cover"
                />
            </div>
            <div>
                <h3 className="text-3xl font-bold mt-8">{title}</h3>
                <p className="text-gray-600 text-xl mt-5">{description}</p>
            </div>
            <Link href={deployLink} target="_blank" className="text-[var(--primary-color)] underline mt-5">Ver deploy {">"}</Link>
        </Card>
    )
}