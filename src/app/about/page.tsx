import { Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    twitter?: string;
    linkedin?: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Prab Jayachandran",
        role: "Co-CEO",
        bio: "Prab Jayachandran is a student at Zionsville Community High School and the Co-CEO of NextGen Research Institute. In addition to being a CoolEdge Senator and Coca-Cola Regional Finalist, he has done research for Stanford, IU, and Purdue in Economics, GIS, ML, and Computational Biology.",
        image: "/images/team/first.png",
        twitter: "https://twitter.com/prab",
        linkedin: "https://linkedin.com/in/prab"
    },
    {
        name: "Nishant Gadde",
        role: "Co-CEO",
        bio: "Nishant Gadde is a student at Jordan High School and the Co-CEO of NextGen Research Institute. He's done research at the University of Houston, Nvidia, Georgia Institute of Technology, CTU Prague, and did plenty of independent research in machine learning, applied math, photonic neural networks, and more.",
        image: "/images/team/second.png",
        twitter: "https://twitter.com/nishant",
        linkedin: "https://linkedin.com/in/nishant"
    },
    {
        name: "Amrit Vignesh",
        role: "President",
        bio: "Amrit Vignesh is the President of NextGen Research Institute and a freshman at Princeton University, majoring in Data Science. He has done research with UFlorida, UCF, Syracuse, GA Tech, presented at Carnegie Mellon, and collaborated with Princeton.",
        image: "/images/team/third.png",
        twitter: "https://twitter.com/amrit",
        linkedin: "https://linkedin.com/in/amrit"
    },
    {
        name: "Rishi Kanaparti",
        role: "COO",
        bio: "Rishi Kanaparti is a driven researcher at Georgia Tech, dedicated to pushing the boundaries of scientific discovery. With a passion for technology and medicine, Rishi contributes to groundbreaking projects, including work at Stride Labs.",
        image: "/images/team/fourth.jpg",
        twitter: "https://twitter.com/rishi",
        linkedin: "https://linkedin.com/in/rishi"
    },
    {
        name: "Arin Patil",
        role: "CMO",
        bio: "Arin Patil is a student at Innovation Academy in Alpharetta, GA, passionate about digital marketing, finance, and business innovation. With over 4 million individual online impressions, Arin has made a significant impact through their work managing 8+ social media accounts and running a successful Digital Marketing Agency.",
        image: "/images/team/fifth.png",
        twitter: "https://twitter.com/arin",
        linkedin: "https://linkedin.com/in/arin"
    },
    {
        name: "Maisy Matthews",
        role: "Outreach Director",
        bio: "Maisy Matthews is a student at Midland High School and is President of the MHS National Honor Society. She serves as Class President as well as a member of the Midland Area Youth Action Council.",
        image: "/images/team/sixth.png",
        twitter: "https://twitter.com/maisy",
        linkedin: "https://linkedin.com/in/maisy"
    },
    {
        name: "Vasavi Suresh",
        role: "Director of Marketing",
        bio: "Vasavi is a talented marketing director with a strong background in social media management, having interned with various businesses to enhance their online presence. With college-level education in marketing, she has developed skills in creating impactful logos.",
        image: "/images/team/seventh.png",
        twitter: "https://twitter.com/vasavi",
        linkedin: "https://linkedin.com/in/vasavi"
    },
    {
        name: "Shiv Patel",
        role: "Director of Research",
        bio: "Shiv is a premed student at Florida State University. In high school, he has done various independent research that has led him to compete and become a finalist at Regeneron ISEF.",
        image: "/images/team/eigth.png",
        twitter: "https://twitter.com/shiv",
        linkedin: "https://linkedin.com/in/shiv"
    }
];

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Team Grid */}
            <section className="w-full py-16">
                <div className="container max-w-5xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member) => (
                            <div 
                                key={member.name}
                                className="group relative flex flex-col gap-4 rounded-lg overflow-hidden"
                            >
                                <div className="aspect-[3/2.5] w-full overflow-hidden rounded-lg">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">{member.name}</h3>
                                            <p className="text-xs text-muted-foreground">{member.role}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {member.twitter && (
                                                <Link href={member.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                                    <Twitter className="h-4 w-4" />
                                                </Link>
                                            )}
                                            {member.linkedin && (
                                                <Link href={member.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                                    <Linkedin className="h-4 w-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}