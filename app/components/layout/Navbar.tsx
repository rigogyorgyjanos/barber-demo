"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSmoothScroll } from "@/app/hook/useSmoothScroll";
import Button from "../ui/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollTo = useSmoothScroll();

    const navItems = [
        { label: "Barbers", id: "#barbers" },
        { label: "Services", id: "#services" },
        { label: "Gallery", id: "#gallery" },
        { label: "Contact", id: "#contact" },
    ];

    // Navbar background scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={clsx(
                    "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] border",
                    scrolled
                        ? "top-4 w-[95%] max-w-5xl bg-black/30 backdrop-blur-xl border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                        : "top-0 w-full max-w-none bg-black/0 backdrop-blur-md border-white/0 rounded-none shadow-none"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div
                        onClick={() => scrollTo("#top")}
                        className="font-heading text-xl tracking-widest uppercase cursor-pointer"
                    >
                        Barber
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider cursor-pointer">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="hover:text-accent transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button href="https://salonic.hu/">
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden z-60"
                    >
                        <HiOutlineMenu size={28} />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 backdrop-blur-2xl z-50 flex flex-col justify-between px-8 py-24 text-2xl uppercase tracking-widest"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6"
                        >
                            <HiOutlineX size={32} />
                        </button>

                        {/* Menu items */}
                        <div className="flex flex-col gap-8 items-start">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.id}
                                    onClick={() => {
                                        scrollTo(item.id);
                                        setMenuOpen(false);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="hover:text-accent text-left"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <motion.a
                            href="https://salonic.hu/"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="border px-6 py-3 w-fit mx-auto"
                        >
                            Book Now
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}