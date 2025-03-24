"use client";

import { PLANS } from "@/constants";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";

type Plan = "monthly" | "yearly";

const Pricing = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-medium mb-3 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Choose Your Research Plan
                </h1>
                <p className="text-muted-foreground text-lg">
                    (Fun Fact: Our closest alternative charges $4,000)
                </p>
            </div>
            
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                        {PLANS.map((plan, index) => (
                            <Plan
                                key={index}
                                index={index}
                                {...plan}
                                plan="monthly"
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
};

const Plan = ({
    id,
    title,
    desc,
    monthlyPrice,
    yearlyPrice,
    buttonText,
    features,
    index,
    plan,
    link,
}: {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    buttonText: string;
    features: string[];
    index: number;
    plan: Plan;
    link: string;
}) => {

    const getDisplayedPrice = (plan: string, monthlyPrice: number, yearlyPrice: number) => {
        if (plan === "monthly") {
            return monthlyPrice === 0 ? "0.00" : monthlyPrice.toFixed(2);
        }
        return "0.00";
    };

    const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice);

    return (
        <div key={index} className="w-full relative flex flex-col saturate-150 rounded-2xl">

            <div
                className={cn(
                    "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                    id === "pro" ? "border-primary/80" : "border-border/60",
                )}
            >
                {id === "pro" && (
                    <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                        <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
                            Most Popular
                        </span>
                    </div>
                )}
                <div className="flex flex-col p-3 w-full">
                    <h2 className="text-xl font-medium">
                        {title}
                    </h2>
                    <p className="text-sm mt-2 text-muted-foreground break-words">
                        {desc}
                    </p>
                </div>
                <hr className="shrink-0 border-none w-full h-px bg-border" role="separator" />
                <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
                    <div className="flex items-end gap-2">
                        <div className="flex items-end gap-1 w-52">
                            <span className="text-3xl md:text-4xl font-bold">
                                ${displayedPrice}
                            </span>
                            {/* In here 120 * 0.8 = 96 and /12 to get monthly price */}
                            <span className="text-lg text-muted-foreground font-medium">
                                / {plan === "monthly" ? "appl." : "month"}
                            </span>
                        </div>
                        <AnimatePresence>
                            {(id !== "free" && plan === "yearly") && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                    aria-hidden="true"
                                    className="text-xs px-2 py-0.5 rounded mb-1 text-foreground bg-primary font-medium"
                                >
                                    -20%
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckIcon aria-hidden="true" className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-3 mt- h-auto flex w-full items-center">
                    <Button
                        asChild
                        variant={id === "pro" ? "default" : "tertiary"}
                        className="w-full hover:scale-100 hover:translate-y-0 shadow-none text-center"
                    >
                        <Link target="_blank" href={link} className="flex justify-center items-center">
                            {buttonText}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Pricing
