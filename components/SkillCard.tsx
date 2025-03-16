import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function SkillCard({ title, description, icon: Icon }: SkillCardProps) {
  return (
    <Card className="p-8 bg-[var(--bg-shade)] hover:border-bottom-[var(--primary-color)] shadow-xl gap-0">
        <Icon className="w-12 h-12 text-primary bg-white p-3 rounded-xl"/>
        <h3 className="text-3xl font-bold mt-8">{title}</h3>
        <p className="text-gray-600 text-xl mt-5">{description}</p>
    </Card>
  );
}