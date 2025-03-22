"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        number: "1",
        title: "Showcase Research Papers",
        description: "NextGen Research Institute features highchoolers research papers in a monthly journal, providing exposure and opportunities for collaboration with college professors.",
        image: "/images/cards/card3.png"
    },
    {
        number: "2",
        title: "Connect with Professors",
        description: "Our platform facilitates connections betweenhigh school students and college professors, opening doors to valuable research opportunities and mentorship.",
        image: "/images/cards/card2.png"
    },
    {
        number: "3",
        title: "Expand Research Horizons",
        description: "By participating in NextGen Research Institute, students can broaden their research horizons, gain experience, and explore new academic opportunities.",
        image: "/images/cards/card1.png"
    }
];

export default function CardStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Create transform functions for each card position
    const topTransform0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const topTransform1 = useTransform(scrollYProgress, [0, 1], [375, 0]);
    const topTransform2 = useTransform(scrollYProgress, [0, 1], [750, 0]);
    
    const scaleTransform = useTransform(scrollYProgress, [0, 0.7], [1, 0.9]);

    return (
        <div ref={containerRef} className="min-h-screen py-20 md:py-32">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left side - Features */}
                    <div className="space-y-24 md:space-y-32">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-start gap-4">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 bg-primary/5 text-xl font-medium">
                                        {feature.number}
                                    </span>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl md:text-3xl font-medium">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-base md:text-lg">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Stacked Cards */}
                    <div className="relative h-[700px] hidden md:block">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                style={{
                                    top: index === 0 ? topTransform0 : index === 1 ? topTransform1 : topTransform2,
                                    scale: scaleTransform
                                }}
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 