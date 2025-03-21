import { Badge } from "../ui/badge";

const testimonials = [
    {
        quote: "Connected me with amazing professors and research opportunities that transformed my academic journey.",
        name: "Aneesh Chintala",
        role: "Researcher at The University of Houston"
    },
    {
        quote: "I am grateful for the chance to collaborate with top professionals in my field. NextGen opened doors I didn't know existed.",
        name: "Shiva Uppaladhini",
        role: "Research Assistant @ Purdue University"
    },
    {
        quote: "The guidance and connections provided by NextGen have been invaluable to my research journey and academic growth.",
        name: "Jeffrey Au",
        role: "Research Assistant @ UH"
    }
];

const Reviews = () => {
    return (
        <section className="w-full py-20">
            {/* Header */}
            <div className="relative mb-16 text-center">
                {/* Gradient background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-2xl blur-2xl opacity-75 -z-10"></div>
                
                <div className="flex items-center justify-center gap-4 mb-8">
                    <Badge 
                        variant="outline" 
                        className="text-base px-4 py-1.5 border-primary/20 bg-primary/5"
                    >
                        Student Success Stories
                    </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-[1.1] mb-6 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Don&apos;t Take It From Us
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
                    Hear What Our Students Say About Their Experience
                </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index}
                        className="group relative flex flex-col"
                    >
                        <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-xl blur-sm opacity-0 transition-opacity"></div>
                        <div className="relative flex flex-col p-6 rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm">
                            <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="mt-auto">
                                <h3 className="text-lg font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional: Add a subtle animated gradient line */}
            <div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-primary/50 via-violet-500/50 to-primary/50 mt-16 opacity-25"></div>
        </section>
    );
};

export default Reviews;
