import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
    light?: boolean;
}

export function SectionHeading({ title, subtitle, align = "center", className, light = false }: SectionHeadingProps) {
    return (
        <div className={cn("space-y-4 mb-12", align === "center" ? "text-center" : "text-left", className)}>
            {subtitle && (
                <span className={cn("text-xs font-bold tracking-[0.2em] uppercase", light ? "text-gold-300" : "text-gold-600")}>
                    {subtitle}
                </span>
            )}
            <h2 className={cn("text-3xl md:text-5xl font-serif font-bold", light ? "text-white" : "text-slate-900")}>
                {title}
            </h2>
            <div className={cn("h-1 w-20 bg-gold-500 mt-4", align === "center" ? "mx-auto" : "")} />
        </div>
    );
}
