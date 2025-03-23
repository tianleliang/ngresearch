"use client";

import { BookOpen, Users, Sparkles, GraduationCap } from "lucide-react";
import Container from "../global/container";

const features = [
    {
        title: "Research Guidance",
        description: "Receive expert guidance and support throughout your research journey with NextGen's experienced team.",
        icon: <BookOpen className="w-12 h-12 text-primary/80" />,
    },
    {
        title: "Networking Opportunities",
        description: "Connect with professors and experts in your research field through NextGen's journal, opening doors to potential collaborations and opportunities.",
        icon: <Users className="w-12 h-12 text-primary/80" />,
    },
    {
        title: "Professional Development",
        description: "Enhance your research skills and knowledge through hands-on experience and interaction with industry professionals.",
        icon: <Sparkles className="w-12 h-12 text-primary/80" />,
    },
    {
        title: "Collegiate Pathways",
        description: "Gain access to a wide network of professors and research opportunities to further your academic and research pursuits.",
        icon: <GraduationCap className="w-12 h-12 text-primary/80" />,
    }
];

export default function NIRPStuff() {
    return (
        <div className="mt-16 w-full">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col"
                        >
                            <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative flex flex-col p-8 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm min-h-[280px]">
                                <div className="mb-6">
                                    {feature.icon}
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-xl font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
