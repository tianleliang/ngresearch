"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        number: "1",
        title: "Choose a Path",
        description: "Decide which of our two applications fit your needs. Our holistic application is for those without prior research to publish. Our publication application is for those with prior independent research.",
        image: "/images/papers/paper1.png"
    },
    {
        number: "2",
        title: " Submit an Application",
        description: "Navigate to the apply tab on our website and click your desired package. For our holistic application, we ask for your grades, resume, and short essays, so be ready with those supplementals. For our publication pipeline, just submit an independent paper. After you have completed your application, our Ivy League advisors and mentors will get back to you within 3-4 weeks with a decision.",
        image: "/images/papers/paper2.png"
    },
    {
        number: "3",
        title: " Connect & Expand Your Horizons",
        description: "Take your first step towards research as a NextGen Scholar. Once we connect you with a research opportunity, you’re off to the races at whichever University or Startup you’re matched with! Your research roadmap will depend on the opportunity you’re matched with. No matter the match, we ensure a quality process that will help students get real world experience in the field of their passion and choice.",
        image: "/images/papers/paper3.png"
    }
];

export default function CardStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Create transform functions for each card position
    const topTransform0 = useTransform(scrollYProgress, [1, 0], [0, 0]);
    const topTransform1 = useTransform(scrollYProgress, [1, 0], [0, 300]);
    const topTransform2 = useTransform(scrollYProgress, [1, 0], [0, 600]);
    
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
                                    <span className="flex items-center justify-center w-12 h-8 rounded-full border border-primary/20 bg-primary/5 text-xl font-medium px-3">
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
                    <div className="relative h-[700px] md:block rotate-180">
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