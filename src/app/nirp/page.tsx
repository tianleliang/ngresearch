import { CTASection } from "@/components/ui/cta-section"
import { Badge } from "@/components/ui/badge"
import { Wrapper } from "@/components";
import NIRPStuff from "@/components/marketing/nirpstuff";
import Image from "next/image";

interface FeatureProps {
    title: string;
    description: string;
}

function Feature({ title, description }: FeatureProps) {
    return (
        <div className="flex flex-col gap-2 p-6 rounded-2xl border bg-card/50">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground/90 leading-relaxed">{description}</p>
        </div>
    );
}

export default function NIRP() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-28 lg:py-32">
                <div className="container max-w-6xl px-4">
                    <div className="max-w-3xl relative">
                        {/* Gradient background effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-2xl blur-2xl opacity-75 -z-10"></div>
                        
                        <div className="flex items-center gap-4 mb-8">
                            <Badge 
                                variant="outline" 
                                className="text-base px-4 py-1.5 border-primary/20 bg-primary/5 hover:bg-primary/10"
                            >
                                Starting at $30
                            </Badge>
                            <Badge 
                                variant="outline" 
                                className="text-base px-4 py-1.5 border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10"
                            >
                                Innovative Program
                            </Badge>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium !leading-[1.1] mb-8 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                            NextGen Independent Research Program
                        </h1>

                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-xl blur-lg opacity-25"></div>
                            <p className="relative text-lg md:text-xl text-muted-foreground/90 leading-relaxed backdrop-blur-sm rounded-lg">
                                Many students struggle with the research process due to a lack of knowledge and experience. 
                                Many do not understand how to properly conduct research and turn it into a paper.
                            </p>
                        </div>

                        {/* Optional: Add a subtle animated gradient line */}
                        <div className="h-px w-full bg-gradient-to-r from-primary/50 via-violet-500/50 to-primary/50 mt-12 opacity-25"></div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container max-w-6xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Program Details */}
                        <div className="space-y-8">
                            <div className="max-w-xl">
                                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                                    Details about NextGen Independent Research Program
                                </h2>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                    NIRP offers a structured approach for students to pursue their research interests effectively. 
                                    Students who sign up can receive continuous feedback and editing support from NextGens team 
                                    whenever needed throughout the research process, enhancing their papers and increasing their 
                                    chances of acceptance into reputable journals.
                                </p>
                            </div>
                            
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-lg blur-lg opacity-50"></div>
                                <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                        By participating in the NextGen Independent Research Program, students not only gain valuable 
                                        research experience but also open doors to potential collaborations with professors and access 
                                        to a wider research network. This program serves as a stepping stone for students to dive deeper 
                                        into the world of research.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* You can add another div here for additional content */}
                        <div className="relative hidden lg:block">
                            {/* Gradient background effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-lg blur-lg opacity-75"></div>
                            <div className="relative h-full bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-border/50">
                                <div className="aspect-[4/3] w-full h-full relative overflow-hidden rounded-lg">
                                    <Image 
                                        src="/images/photo-1583911860205-72f8ac8ddcbe.jpg" 
                                        alt="NIRP" 
                                        fill
                                        className="object-cover object-center hover:scale-105 transition-transform duration-300"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Wrapper>
            <NIRPStuff />
            </Wrapper>
            {/* Testimonial Section */}
            <section className="w-full py-20 bg-accent/10">
                <div className="container max-w-6xl px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-medium mb-8">What Our Students Say</h2>
                        <blockquote className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed italic mb-8">
                            &quot;The NextGen Independent Research Program has been instrumental in shaping my research journey. 
                            The guidance and feedback I received helped me refine my paper and secure publication in a 
                            respected journal. I would highly recommend this program to any student serious about research.&quot;
                        </blockquote>
                        <div className="flex flex-col items-center gap-2">
                            <p className="font-medium">Michael Chen</p>
                            <p className="text-sm text-muted-foreground">High School Senior, NIRP Participant</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to start your research journey?"
                description="Join NIRP and get professional help to take your research paper to the next level."
                action={{
                    text: "Click Here To Apply",
                    href: "/apply-here",
                    variant: "default"
                }}
                className="py-24"
            />
        </div>
    )
} 