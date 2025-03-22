"use client";

import { NotepadText } from "lucide-react";
import Container from "../global/container";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import Link from "next/link";

const WhyChoose = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    Why choose NextGen?
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/60 mt-6">
                    NextGen Research Institute offers unique opportunities for high school students to showcase their research and connect with academic professionals. Our platform serves as a bridge between talented young researchers and the academic community.
                    </p>
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 w-full">
                    <Container>
                        {/* Top large card */}
                        <Link href="/journal">
                        <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                            <div className="bento-card relative flex flex-col justify-between min-h-80 w-full p-6">
                                {/* Centered icon with ripple */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-muted-foreground group-hover:text-foreground relative z-10">
                                        <NotepadText className="w-20 h-20" />
                                    </span>
                                    <Ripple />
                                </div>

                                {/* Text content at bottom */}
                                <div className="flex flex-col mt-auto relative z-20">
                                    <h4 className="text-xl font-heading font-medium heading">
                                        Publication Opportunities
                                    </h4>
                                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        Get your research papers published in our monthly journal.
                                    </p>
                                </div>
                        
                            </div>
                        </MagicCard>
                        </Link>
                        {/* Bottom two equal cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 mt-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-40">
                                        <Images.integration className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-heading font-medium heading">
                                        Academic Connections
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        Connect with professors and researchers from top universities.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>

                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full">
                                        <Images.hash className="w-full h-40" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-heading font-medium heading">
                                        Professional Development
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        Enhance your research skills and academic profile.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default WhyChoose;
