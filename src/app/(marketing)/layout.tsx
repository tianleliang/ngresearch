import React from 'react';
import { Footer, Navbar } from "@/components";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            {/* Background Video with Grid Overlay */}
            <div className="fixed inset-0 z-0">
                <video
                    src="/images/Comp 1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                >
                    <source src="/images/Comp 1.mp4" type="video/mp4" />
                </video>
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-background/80 backdrop-blur-sm" />
            </div>

            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout;
