"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "../ui/Button";
import { UseScrollOptions } from "framer-motion";
import { useSmoothScroll } from "@/app/hook/useSmoothScroll";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const scrollTo = useSmoothScroll()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/70 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="font-heading text-xl tracking-widest uppercase">
                    <a
                        onClick={() => scrollTo("#top")}
                        className="cursor-pointer"
                    >
                        Barber
                    </a>
                </div>

                {/* Nav items */}
                <div className="hidden md:flex items-center gap-8 Fext-sm uppercase tracking-wider">
                    <a
                        onClick={() => scrollTo("#barbers")}
                        className="hover:text-accent transition tracking-widest cursor-pointer"
                    >
                        Barbers
                    </a>
                    <a
                        onClick={() => scrollTo("#services")}
                        className="hover:text-accent transition tracking-widest cursor-pointer"
                    >
                        Services
                    </a>
                    <a
                        onClick={() => scrollTo("#gallery")}
                        className="hover:text-accent transition tracking-widest cursor-pointer"
                    >
                        Gallery
                    </a>
                </div>

                {/* CTA */}
                <Button href="https://salonic.hu/" className="hidden md:block">
                    Book Now
                </Button>
            </div>
        </nav>
    );
}