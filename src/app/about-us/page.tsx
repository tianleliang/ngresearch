import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Prab Jayachandran",
        role: "Co-CEO",
        bio: "Leading NextGen's vision and strategy, focusing on expanding research opportunities for high school students.",
        image: "/images/team/first.png",
        linkedin: "https://www.linkedin.com/in/prabjayachandran/"
    },
    {
        name: "Nishant Gadde",
        role: "Co-CEO",
        bio: "Driving innovation in research education and building partnerships with leading institutions.",
        image: "/images/team/second.png",
        linkedin: "https://www.linkedin.com/in/nishant-gadde-06ba51267/"
    },
    {
        name: "Amrit Vignesh",
        role: "President",
        bio: "Princeton University student leading program development and academic partnerships.",
        image: "/images/team/third.png",
        linkedin: "https://www.linkedin.com/in/amritvignesh/"
    },
    {
        name: "Arin Patil",
        role: "CMO",
        bio: "Digital marketing expert managing NextGen's online presence and community engagement. ",
        image: "/images/team/fifth.jpeg",
        linkedin: "https://www.linkedin.com/in/arin-patil/"
    },
    {
        name: "Tianle Liang",
        role: "CTO",
        bio: "Leading tech innovation, automation, and platform security/infrastructure to advance NextGen's cutting-edge advantage.",
        image: "/images/team/tianle.jpg",
        linkedin: "https://www.linkedin.com/in/tianle-liang-3770522b9/"
    },
    {
        name: "Shiv Patel",
        role: "Director of Research",
        bio: "Overseeing research initiatives and mentorship programs while studying at Florida State.",
        image: "/images/team/eigth.png",
        linkedin: "https://www.linkedin.com/in/shiv-p-patel/"
    }
];

export default function AboutUs() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-24 md:py-32 lg:py-36">
            <div className="container max-w-6xl px-4">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium !leading-[1.1] mb-3 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Meet Our Team
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        The passionate individuals behind NextGen Research Institute, dedicated to transforming high school research.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div 
                            key={member.name}
                            className="group relative bg-card/30 rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/50"
                        >
                            <div className="aspect-square w-full overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-xl font-medium">{member.name}</h3>
                                    {member.linkedin && (
                                        <Link 
                                            href={member.linkedin} 
                                            target="_blank" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>
                                <p className="text-primary/90 text-sm mb-4">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 
