"use client";

import Button from "../ui/Button";

export default function CTA() {
    return (
        <section className="bg-accent text-black py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-6">
                Ready for a Premium Grooming Experience?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
                Book your appointment with one of our expert barbers today and enjoy
                a luxury grooming session tailored just for you.
            </p>
            <Button href="https://salonic.hu/" className="text-black">
                Book Now
            </Button>
        </section>
    );
}