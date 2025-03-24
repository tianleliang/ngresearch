import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const Companies = () => {
    const schools = [
        { name: "Brown University", src: "/images/schools/brown.png", className: "scale-[0.85]" },
        { name: "Columbia University", src: "/images/schools/columbia.png", className: "scale-[1.35]" },
        { name: "Cornell University", src: "/images/schools/cornell.png", className: "scale-[1.25]" },
        { name: "Emory University", src: "/images/schools/emory.png" },
        { name: "Georgia Tech", src: "/images/schools/gt.png", className: "scale-[1.15]"},
        { name: "Harvard University", src: "/images/schools/harvard.png", className: "scale-[1.3]" },
        { name: "Johns Hopkins University", src: "/images/schools/jhu.png", className: "scale-[1.25]" },
        { name: "New York University", src: "/images/schools/nyu.png", className: "scale-[1.5]" },
        { name: "Princeton University", src: "/images/schools/princeton.png" },
        { name: "Stanford University", src: "/images/schools/stanford.png" },
        { name: "Vanderbilt University", src: "/images/schools/vandy.png", className: "scale-90" },
    ];

    return (
        <div className="flex w-full py-20">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">
                    Schools that trust us
                </h2>
                <div className="mt-16 w-full relative overflow-hidden">
                    <Marquee className="[--duration:40s]">
                        <div className="flex items-center gap-16">
                            {schools.map((school) => (
                                <div 
                                    key={school.name} 
                                    className="relative w-40 h-16 flex items-center justify-center px-2 mr-16"
                                >
                                    <Image
                                        src={school.src}
                                        alt={school.name}
                                        fill
                                        className={`object-contain filter transition-opacity ${school.className || ''}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Companies;
