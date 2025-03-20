import { CTASection } from "@/components/ui/cta-section"
import { Badge } from "@/components/ui/badge"
import { CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

function PricingCard({ price, title, features }: { price: number; title: string; features: string[] }) {
    return (
        <div className="w-full relative flex flex-col saturate-150 rounded-2xl">
            <div className="flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]">
                <div className="flex flex-col p-3 w-full">
                    <h2 className="text-xl font-medium">{title}</h2>
                </div>
                <hr className="shrink-0 border-none w-full h-px bg-border" role="separator" />
                <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
                    <div className="flex items-end gap-2">
                        <div className="flex items-end gap-1">
                            <span className="text-3xl md:text-4xl font-bold">${price}</span>
                            <span className="text-lg text-muted-foreground font-medium">per month</span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                                <p className="text-sm md:text-base text-muted-foreground">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-3 mt-auto h-auto flex w-full items-center">
                    <Button
                        asChild
                        variant="default"
                        className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
                    >
                        <Link href="/apply-here">
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function NIRP() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-28 lg:py-32 border-b bg-gradient-to-b from-background to-accent/5">
                <div className="container max-w-6xl px-4">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <Badge variant="outline" className="text-base px-4 py-1">
                                Starting at $30
                            </Badge>
                            <Badge variant="outline" className="text-base px-4 py-1">
                                Innovative Program
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium !leading-[1.1] mb-6">
                            NextGen Independent Research Program
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
                            Many students struggle with the research process due to a lack of knowledge and experience. 
                            Many do not understand how to properly conduct research and turn it into a paper.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full py-20 bg-accent/5">
                <div className="container max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-medium mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-muted-foreground">Choose the plan that works best for you</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingCard
                            price={30}
                            title="Basic Research Support"
                            features={[
                                "Research guidance and mentorship",
                                "Basic paper review and feedback",
                                "Access to research resources",
                                "Email support"
                            ]}
                        />
                        <PricingCard
                            price={50}
                            title="Premium Research Support"
                            features={[
                                "Everything in Basic, plus:",
                                "Priority paper review",
                                "Direct professor mentorship",
                                "Advanced research tools access",
                                "24/7 priority support"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-20">
                <div className="container max-w-6xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Program Details */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-medium mb-4">
                                    Details about NextGen Independent Research Program
                                </h2>
                                <p className="text-muted-foreground/90 leading-relaxed">
                                    NIRP offers a structured approach for students to pursue their research interests effectively. 
                                    Students who sign up can receive continuous feedback and editing support from NextGen's team 
                                    whenever needed throughout the research process, enhancing their papers and increasing their 
                                    chances of acceptance into reputable journals.
                                </p>
                            </div>
                            <div>
                                <p className="text-muted-foreground/90 leading-relaxed">
                                    By participating in the NextGen Independent Research Program, students not only gain valuable 
                                    research experience but also open doors to potential collaborations with professors and access 
                                    to a wider research network. This program serves as a stepping stone for students to dive deeper 
                                    into the world of research.
                                </p>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Feature 
                                title="Research Guidance"
                                description="Receive expert guidance and support throughout your research journey with NextGen's experienced team."
                            />
                            <Feature 
                                title="Networking Opportunities"
                                description="Connect with professors and experts in your research field through NextGen's journal, opening doors to potential collaborations and opportunities."
                            />
                            <Feature 
                                title="Professional Development"
                                description="Enhance your research skills and knowledge through hands-on experience and interaction with industry professionals."
                            />
                            <Feature 
                                title="Collegiate Pathways"
                                description="Gain access to a wide network of professors and research opportunities to further your academic and research pursuits."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="w-full py-20 bg-accent/5 border-t border-b">
                <div className="container max-w-6xl px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-medium mb-8">What Our Students Say</h2>
                        <blockquote className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed italic mb-8">
                            "The NextGen Independent Research Program has been instrumental in shaping my research journey. 
                            The guidance and feedback I received helped me refine my paper and secure publication in a 
                            respected journal. I would highly recommend this program to any student serious about research."
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
                badge={{ text: "Research Excellence" }}
                title="Ready to start your research journey?"
                description="Join NIRP and get professional help to take your research paper to the next level."
                action={{
                    text: "Apply Now",
                    href: "/apply-here",
                    variant: "default"
                }}
                className="py-24"
            />
        </div>
    )
} 