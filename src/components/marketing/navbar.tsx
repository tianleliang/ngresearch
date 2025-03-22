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
                isOpen ? "h-[calc(100%-24px)]" : "h-12"
            )}>
                <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] p-2">
                    <div className="pt-1 flex items-center justify-between w-full">
                        {/* Logo and Name */}
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <Icons.icon className="w-auto h-5" />
                            <h1 className="hidden md:block text-sm lg:text-base">
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
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
                        <div className="md:hidden pt-4 pb-2">
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/about-us"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors px-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/journal"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors px-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Journal
                                </Link>
                                <Link
                                    href="/apply-here"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors px-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Apply Here
                                </Link>
                                <Link
                                    href="/nirp"
                                    className="text-base text-muted-foreground hover:text-foreground transition-colors px-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    NIRP
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
