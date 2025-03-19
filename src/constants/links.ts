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
            { name: "About Us", href: "/" },
            { name: "Journal", href: "/" },
            { name: "Apply Here", href: "/" },
            { name: "NIRP", href: "/" },
        ],
    },
    {
        title: "Important Links",
        links: [
            { name: "Journal Disc", href: "/blog" },
            { name: "Privacy Policy", href: "/help-center" },
            { name: "Terms of Service", href: "/community" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "contact@nextgenresearch.org", href: "/privacy" },
        ],
    },
];
