import { CTASection } from "@/components/ui/cta-section"
import { Blog8 } from "@/components/blocks/blog8"

export default function Journal() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Main Content */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container max-w-6xl">
                    <div className="mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
                            Journal
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            Dive into the world of high school research by exploring a wide range of research papers in the NextGen Journal. 
                            Our bimonthly journal showcases the work of a few of the top NextGen scholars who demonstrate especially impressive 
                            academic rigor and creativity.
                        </p>
                    </div>
                    
                </div>
                <Blog8
                        heading="Latest Journal Editions"
                        description="Explore our latest published research papers from talented young researchers."
                        posts={[
                            {
                                id: "nov-dec-2023",
                                title: "November & December Journal Edition",
                                summary: "These papers, representing the top 10% of a highly competitive application pool, reflect a growing interest in fields like neurology, behavior cloning, cancer screening, political campaigning, and genome editing.",
                                label: "Latest Edition",
                                author: "NextGen Research Team",
                                published: "Dec 2024",
                                url: "https://drive.google.com/file/d/14EhfcLWru56lWG4olgox1r2eSIFLNN7g/view",
                                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop",
                                tags: ["Neurology", "AI", "Healthcare"]
                            },
                            {
                                id: "sep-oct-2023",
                                title: "September & October Journal Edition",
                                summary: "These papers, representing the top 20% of accepted NextGen scholars, reflect a growing interest in fields like neurodivergence, visual arts, color perception, and healthcare innovation.",
                                label: "Research",
                                author: "NextGen Research Team",
                                published: "Oct 2024",
                                url: "https://drive.google.com/file/d/12nYI5VPT3MqgQkePZhPwwnHCSHd-N9hv/view",
                                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop",
                                tags: ["Neuroscience", "Arts", "Healthcare"]
                            },
                            {
                                id: "aug-2023",
                                title: "August Journal Edition",
                                summary: "These papers, representing the top 15% of accepted NextGen scholars, reflect a growing interest in fields like lung cancer, finance, nanoparticles, and economics.",
                                label: "Research",
                                author: "NextGen Research Team",
                                published: "Aug 2024",
                                url: "https://drive.google.com/file/d/12qqwVeyQFqK1UigfuQAvagfnMgh8j7JO/view",
                                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
                                tags: ["Healthcare", "Finance", "Nanotechnology"]
                            },
                            {
                                id: "jul-2023",
                                title: "July Journal Edition",
                                summary: "These papers, representing the top 15% of accepted NextGen scholars, reflect a growing interest in fields like AI, healthcare, machine learning, and biology.",
                                label: "Research",
                                author: "NextGen Research Team",
                                published: "Jul 2024",
                                url: "https://drive.google.com/file/d/1cPZsBFgIw6OXdsAFst6cF-UkMBjmD7yp/view",
                                image: "https://images.unsplash.com/photo-1555066931-bf19f8e1083d?w=800&h=450&fit=crop",
                                tags: ["AI", "Machine Learning", "Biology"]
                            },
                            {
                                id: "may-2023",
                                title: "May Journal Edition",
                                summary: "These papers, representing the top 20% of a highly competitive application pool, reflect a growing interest in fields like AI, blockchain, cognitive health, and race.",
                                label: "Research",
                                author: "NextGen Research Team",
                                published: "May 2024",
                                url: "https://drive.google.com/file/d/1VV4J9sOqtVfSmlkOOMNkVm2cdvSz01Mq/view",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
                                tags: ["AI", "Blockchain", "Cognitive Science"]
                            }
                        ]}
                    />
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