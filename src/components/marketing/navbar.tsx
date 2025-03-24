"use client";

import { cn } from "@/functions";
import { Menu as MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="relative w-full h-full">
            <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] bg-[rgba(10,10,10,0.8)] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>

            <header className={cn(
                "fixed top-4 inset-x-0 mx-auto max-w-6xl px-4 z-[100]",
                isOpen ? "h-auto" : "h-auto"
            )}>
                <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)]">
                    <div className="flex items-center justify-between w-full h-10 px-2">
                        {/* Logo and Name */}
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2">
                                <Icons.icon className="w-auto h-5" />
                                <h1 className="text-sm lg:text-base">
                                    NextGen Research Institute
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/about-us" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                About Us
                            </Link>
                            <Link href="/journal" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                Journal
                            </Link>
                            <Link href="/apply-here" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                Apply Here
                            </Link>
                            <Link href="/nirp" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
                                NIRP
                            </Link>
                            <Link 
                                href="https://www.instagram.com/nextgenri/" 
                                target="_blank" 
                                className="flex items-center gap-1 text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors group"
                                aria-label="Visit our Instagram"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="h-4 w-4 group-hover:scale-110 transition-transform"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {isOpen ? (
                                <XIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden border-t border-[rgba(124,124,124,0.1)] p-4">
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/about-us"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/journal"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Journal
                                </Link>
                                <Link
                                    href="/apply-here"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Apply Here
                                </Link>
                                <Link
                                    href="/nirp"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    NIRP
                                </Link>
                                <Link
                                    href="https://instagram.com/nextgenresearchinstitute"
                                    target="_blank"
                                    className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Visit our Instagram"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="h-5 w-5"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                    Instagram
                                </Link>
                            </nav>
                        </div>
                    )}
                </Wrapper>
            </header>
        </div>
    );
};

export default Navbar;
