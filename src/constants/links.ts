import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Learn More",
        links: [
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Journal", href: "/journal" },
            { name: "Apply Here", href: "/apply-here" },
            { name: "NIRP", href: "/nirp" },
        ],
    },
    {
        title: "Important Links",
        links: [
            { name: "Journal Disc", href: "https://docs.google.com/document/d/1yQ8wC52FALEsdI1vLSB8LtWQQpMG1C3YmSUWluSqwjI/edit?tab=t.0" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/tos" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "contact@nextgenresearch.org", href: "/privacy" },
        ],
    },
];
