import { Pricing } from "@/components";

export default function ApplyHere() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 md:py-16 lg:py-24">
            <div className="container max-w-6xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
                    Apply Here
                </h1>
                <p className="text-lg text-muted-foreground">
                    Submit your research paper and join our academic community.
                </p>

                <Pricing />
            </div>
        </div>
    )
} 