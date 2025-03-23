import { Blog8 } from "@/components/blocks/blog8"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Journal() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 md:py-16 lg:py-24">
            {/* Main Content */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container max-w-6xl">
                    <div className="relative mb-20">
                        {/* Gradient background effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-2xl blur-2xl opacity-75 -z-10"></div>
                        
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <Badge 
                                    variant="outline" 
                                    className="text-base px-4 py-1.5 border-primary/20 bg-primary/5 hover:bg-primary/10"
                                >
                                    Research Papers
                                </Badge>
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-heading font-medium !leading-[1.1] mb-8 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                                NextGen Journal
                            </h1>

                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-xl blur-lg opacity-25"></div>
                                <p className="relative text-md md:text-base text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto backdrop-blur-sm rounded-lg">
                                    Dive into the world of high school research by exploring a wide range of research papers in the NextGen Journal. 
                                    Our bimonthly journal showcases the work of a few of the top NextGen scholars who demonstrate especially impressive 
                                    academic rigor and creativity.
                                </p>
                            </div>

                            {/* Optional: Add a subtle animated gradient line */}
                            <div className="h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-primary/50 via-violet-500/50 to-primary/50 mt-12 opacity-25"></div>
                        </div>
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
                                image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=450&fit=crop",
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

            <section className="w-full py-20">
                <div className="container max-w-6xl px-4">
                    <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
                        {/* Title */}
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Ready to start your research journey?
                        </h2>

                        {/* Description */}
                        <p className="text-muted-foreground max-w-2xl">
                            Join NIRP and get professional help to take your research paper to the next level.
                        </p>

                        {/* Action Button */}
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className="mt-4"
                        >
                            <a href="/apply-here">Click Here To Apply</a>
                        </Button>

                        
                    </div>
                </div>
            </section>
        </div>
    )
} 