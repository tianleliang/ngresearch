import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const Companies = () => {
    const schools = [
        { name: "Brown University", src: "/images/schools/brown.png", className: "scale-[0.85]" },
        { name: "Columbia University", src: "/images/schools/columbia.png" },
        { name: "Cornell University", src: "/images/schools/cornell.png" },
        { name: "Emory University", src: "/images/schools/emory.png" },
        { name: "Georgia Tech", src: "/images/schools/gt.png" },
        { name: "Harvard University", src: "/images/schools/harvard.png" },
        { name: "Johns Hopkins University", src: "/images/schools/jhu.png" },
        { name: "New York University", src: "/images/schools/nyu.png" },
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
                    <Marquee pauseOnHover className="[--duration:40s]">
                        <div className="flex items-center gap-16">
                            {schools.map((school) => (
                                <div 
                                    key={school.name} 
                                    className="relative w-36 h-14 flex items-center justify-center px-2 mr-16"
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
