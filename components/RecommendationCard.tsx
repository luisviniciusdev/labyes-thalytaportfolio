import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Card } from "./ui/card";
import Link from "next/link";

interface RecommendationCardProps {
    text: string;
    imgUrl: string;
    imgFallback: string;
    recommenderName: string;
    recommenderPosition: string;
    linkedinUrl: string;
}

export function RecommendationCard({ text, imgUrl, imgFallback, recommenderName, recommenderPosition, linkedinUrl }: RecommendationCardProps) {
    return (
        <Card className="p-10 border-[var(--primary-color)] rounded-lg gap-10 max-w-full">
            <p>{text}</p>
            <Link href={linkedinUrl} target="_blank" className="hover:bg-white rounded-lg">
                <div className="flex flex-row gap-5 items-center">
                    <Avatar className="w-[75px] h-[75px]">
                        <AvatarImage src={imgUrl} alt={`Imagem ${recommenderName}`} title={`Imagem ${recommenderName}`} className="w-[75px] h-[75px] rounded-full"/>
                        <AvatarFallback className="w-[75px] h-[75px]">{imgFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-semibold text-[var(--primary-color)]">{recommenderName}</h4>
                        <p>{recommenderPosition}</p>
                    </div>   
                </div>
            </Link> 
        </Card>
    )
}