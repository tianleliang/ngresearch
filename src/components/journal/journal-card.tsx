import { cn } from "@/functions";
import MagicCard from "../ui/magic-card";

interface JournalEditionProps {
    title: string;
    description: string;
    link: string;
    className?: string;
}

export function JournalCard({ title, description, link, className }: JournalEditionProps) {
    return (
        <MagicCard
            className={cn(
                className="flex flex-col items-start size-full bg-primary/[0.08]",
                className
            )}
            particles={true}
        >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 h-full">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted-foreground/90 leading-relaxed">
                    {description}
                </p>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-primary font-medium mt-auto pt-4 hover:opacity-80 transition-opacity"
                >
                    View Journal Issue
                    <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </MagicCard>
    );
} 