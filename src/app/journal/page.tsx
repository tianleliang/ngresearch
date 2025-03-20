import { CTASection } from "@/components/ui/cta-section"
import { JournalCard } from "@/components/journal/journal-card"

export default function Journal() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container max-w-6xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
                     Journal
                    </h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container max-w-6xl">
                    <div className="mb-16">
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Dive into the world of high school research by exploring a wide range of research papers in the NextGen Journal. 
                            Our bimonthly journal showcases the work of a few of the top NextGen scholars who demonstrate especially impressive 
                            academic rigor and creativity.
                        </p>
                    </div>

                    {/* Journal Editions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <JournalCard
                            title="November & December Journal Edition"
                            description="These papers, representing the top 10% of a highly competitive application pool, reflect a growing interest in fields like neurology, behavior cloning, cancer screening, political campaigning, and genome editing."
                            link="/journal/nov-dec-2023"
                        />
                        <JournalCard
                            title="September & October Journal Edition"
                            description="These papers, representing the top 20% of accepted NextGen scholars, reflect a growing interest in fields like neurodivergence, visual arts, color perception, and healthcare innovation."
                            link="/journal/sep-oct-2023"
                        />
                        <JournalCard
                            title="August Journal Edition"
                            description="These papers, representing the top 15% of accepted NextGen scholars, reflect a growing interest in fields like lung cancer, finance, nanoparticles, and economics."
                            link="/journal/aug-2023"
                        />
                        <JournalCard
                            title="July Journal Edition"
                            description="These papers, representing the top 15% of accepted NextGen scholars, reflect a growing interest in fields like AI, healthcare, machine learning, and biology."
                            link="/journal/jul-2023"
                        />
                        <JournalCard
                            title="May Journal Edition"
                            description="These papers, representing the top 20% of a highly competitive application pool, reflect a growing interest in fields like AI, blockchain, cognitive health, and race."
                            link="/journal/may-2023"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                badge={{ text: "Submit Your Research" }}
                title="Ready to showcase your research?"
                description="Apply for a chance to be featured in the NextGen Journal, an impressive addition to any resume."
                action={{
                    text: "Apply Now",
                    href: "/apply-here",
                    variant: "default"
                }}
                className="py-20"
            />
        </div>
    )
} 