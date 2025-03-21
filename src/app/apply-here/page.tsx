import { Pricing } from "@/components";


const faqs = [
    {
        question: "How many times can I apply?",
        answer: "You can keep improving your paper and keep applying, there's no limit. We recommend our advanced plan to get feedback to have the highest chance of acceptance in future rounds."
    },
    {
        question: "Is it difficult to get accepted?",
        answer: "NextGen RI receives applications from all across the world and we have the difficult decision of choosing the best students to connect with our professor network and publish in our journal. Our acceptance rate hovers around 15%."
    },
    {
        question: "How long does the decision take?",
        answer: "You'll generally receive a decision to your email within 2 weeks of the end of the application cycle."
    }
];

export default function ApplyHere() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 md:py-16 lg:py-24">
            <div className="container max-w-6xl">
                <Pricing />
                
                {/* FAQ Section */}
                <section className="w-full py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="relative flex flex-col p-6 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/60 transition-colors"
                            >
                                <h3 className="text-xl font-medium mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
} 