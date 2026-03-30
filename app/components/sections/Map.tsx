"use client"

import Button from "../ui/Button"

const Map = () => {
    return (
        <section
            id="location"
            className="w-full bg-neutral-900 text-white py-16"
        >
            <div className="w-full md:max-w-6xl mx-auto md:px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="space-y-6 px-6 md:px-1">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        Visit Our Barbershop
                    </h2>

                    <p className="text-neutral-300">
                        Stop by for a fresh haircut or a clean beard trim.
                        Our professional team ensures a great experience
                        and top-quality service every time.
                    </p>

                    {/* Opening Hours */}
                    <div className="space-y-2 mb-12">
                        <h3 className="text-xl font-semibold">Opening Hours</h3>
                        <ul className="text-neutral-400">
                            <li>Monday – Friday: 09:00 – 20:00</li>
                            <li>Saturday: 10:00 – 18:00</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <Button
                        href="https://www.google.com/maps/dir/?api=1&destination=Budapest+Barbershop"
                    // target="_blank"


                    >
                        Get Directions
                    </Button>
                </div>

                {/* RIGHT SIDE - MAP */}
                <div className="w-full h-87.5 md:h-112.5 overflow-hidden shadow-lg">
                    <iframe
                        title="Barbershop location"
                        src="https://www.google.com/maps?q=Budapest+Barbershop&output=embed"
                        width="100%"
                        height="100%"
                        className="border-0"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Map;