"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "../ui/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                    Barber
                </div>

                {/* Nav items */}
                <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
                    <a href="#barbers" className="hover:text-accent transition">
                        Barbers
                    </a>
                    <a href="#services" className="hover:text-accent transition">
                        Services
                    </a>
                    <a href="#gallery" className="hover:text-accent transition">
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