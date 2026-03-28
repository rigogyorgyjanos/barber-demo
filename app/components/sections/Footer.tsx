"use client";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-text py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left */}
                <div className="text-center md:text-left">
                    <h3 className="font-heading text-xl mb-2 uppercase">Barber Shop</h3>
                    <p className="text-muted text-sm">
                        Mon-Fri: 09:00 - 20:00 <br />
                        Sat: 10:00 - 18:00
                    </p>
                </div>

                {/* Center / Social */}
                <div className="flex gap-6 text-xl text-accent">
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                </div>

                {/* Right */}
                <p className="text-muted text-sm text-center md:text-right">
                    &copy; {new Date().getFullYear()} Barber Shop. All rights reserved.
                </p>
            </div>
        </footer>
    );
}