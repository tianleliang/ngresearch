type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "NextGen Research Application",
        desc: "Holistic application review for those WITHOUT independent research paper",
        monthlyPrice: 29.99,
        yearlyPrice: 0,
        buttonText: "Apply Now",
        features: [
            "Application review and university connection",
            "Connection with college professor, graduate student mentor, or related startup",
            "Personal NextGen mentorship from Ivy League students",
            "Access to NextGen's advisory board with T20 professors and industry professionals"
        ],
        link: "https://2i5f6gbrotk.typeform.com/to/TunzuzZm?typeform-source=www.ngresearch.org"
    },
    {
        id: "pro",
        title: "Paper Publication",
        desc: "For those WITH independent research paper",
        monthlyPrice: 49.99,
        yearlyPrice: 120,
        badge: "Most Popular",
        buttonText: "Apply Now",
        features: [
            "Publication in journal",
            "Connection with college professor",
            "Personal NextGen mentorship from Ivy League Students",
            "Detailed feedback on independent paper"
        ],
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdqXk1PBjhHQEa5UrQtWb7umW6WyA5PKWI93fkGgn9UuxfZUQ/viewform"
    }
];
