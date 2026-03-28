"use client";

import Button from "../ui/Button";

export default function CTA() {
    return (
        <section id="contact" className=" bg-[#725923] text-black py-24 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-6">
                Ready for a Premium Grooming Experience?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Book your appointment with one of our expert barbers today and enjoy
                a luxury grooming session tailored just for you.
            </p>
            <Button href="https://salonic.hu/" className="text-black">
                Book Now
            </Button>
            <div className="mt-10 flex items-center gap-4 px-6">
                <div className="flex-1 h-px bg-white/30" />
                <span className="text-sm uppercase tracking-widest ">or</span>
                <div className="flex-1 h-px bg-white/30" />
            </div>
            <div className="mt-10 text-center">
                <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-6">
                    Prefer to book by phone?
                </h2>

                <p className="text-white/70 mb-8">
                    Give us a call — we’re happy to help you find the perfect time.
                </p>

                <Button href="tel:+3612345678" className="text-black">
                    Call Us
                </Button>
            </div>
        </section>
    );
}