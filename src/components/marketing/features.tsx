"use client";

import CardStack from "../blocks/card-stack";
import Container from "../global/container";

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    NextGen Research Institute
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/60 mt-6">
                    Empowering High Schoolers with Academic Opportunities
                    </p>
                </div>
            </Container>
        <CardStack />
        </div>
    )
};

export default Features
