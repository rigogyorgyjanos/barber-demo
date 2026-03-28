"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center relative text-center px-6 pt-20">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="text-5xl md:text-7xl font-heading uppercase tracking-widest mb-6">
                    Precision. Style. Identity.
                </h1>

                <p className="text-muted mb-8 max-w-xl mx-auto">
                    Premium grooming experience tailored to perfection.
                </p>
                <div className="mt-15">
                    <Button href="https://salonic.hu/">
                        Book Appointment
                    </Button>
                    <div className="m-10 flex items-center gap-4 px-6">
                        <div className="flex-1 h-px bg-white/30" />
                        <span className="text-sm uppercase tracking-widest ">or</span>
                        <div className="flex-1 h-px bg-white/30" />
                    </div>
                    <Button className="text-[#725923]" href="tel:+3612345678" >
                        Call Us now
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}