"use client";

import Container from "../global/container";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";

const WhyChoose = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    Why choose NextGen?
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    NextGen Education LLC publishes high school students' research papers to reward them with college professor experiences.
                    </p>
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 w-full">
                    <Container>
                        {/* Top large card */}
                        <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08] mb-5">
                            <div className="bento-card w-full flex-row gap-6">
                                <div className="w-full h-52 relative">
                                    <Images.ideation className="w-full h-full" />
                                    <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                </div>
                                <div className="flex flex-col mt-auto">
                                    <h4 className="text-xl font-heading font-medium heading">
                                        Content ideation
                                    </h4>
                                    <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                        Generate ideas for your content with our AI-powered tools to create engaging posts in seconds.
                                    </p>
                                </div>
                            </div>
                        </MagicCard>

                        {/* Bottom two equal cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5 mt-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-40">
                                        <Images.analytics className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-heading font-medium heading">
                                            Get advanced analytics
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Track your performance with detailed analytics and optimize to get better results.
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
                                            Hashtags suggestions
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-muted-foreground">
                                            Get hashtag suggestions based on your content and audience to increase your reach and engagement.
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
