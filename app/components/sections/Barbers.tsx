"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Barber = {
    id: number;
    name: string;
    role: string;
    image: string;
    salonicLink: string;
};

const barbers: Barber[] = [
    {
        id: 1,
        name: "David Stone",
        role: "Fade Specialist",
        image: "/barber1.jpg",
        salonicLink: "https://salonic.hu/barber/david",
    },
    {
        id: 2,
        name: "Marcus Reed",
        role: "Beard Expert",
        image: "/barber2.jpg",
        salonicLink: "https://salonic.hu/barber/marcus",
    },
    {
        id: 3,
        name: "Luca Rossi",
        role: "Classic Cuts",
        image: "/barber3.jpg",
        salonicLink: "https://salonic.hu/barber/luca",
    },
];

export default function Barbers() {
    return (
        <section id="barbers" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-12 text-center">
                Meet Our Barbers
            </h2>

            {/* Desktop layout */}
            <div className="hidden md:flex justify-center items-start   gap-8">
                {barbers.map((barber, index) => {
                    const scaleClass =
                        index === 1 ? "scale-110 z-10" : "scale-95 z-0"; // középső nagyobb
                    return (
                        <motion.div
                            key={barber.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`
                                            relative group cursor-pointer overflow-hidden rounded-lg shadow-lg 
                                            ${scaleClass} transition-transform duration-500

                                        `}
                        >
                            <img
                                src={barber.image}
                                alt={barber.name}
                                className="w-72 md:w-80 lg:w-96 h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-4">
                                <h3 className="text-xl font-heading uppercase tracking-wider text-accent mb-2">
                                    {barber.name}
                                </h3>
                                <p className="text-muted mb-4">{barber.role}</p>
                                <Button href={barber.salonicLink}>
                                    Book with {barber.name}
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile layout: Swiper slider */}
            <div className="md:hidden">
                <Swiper spaceBetween={20} slidesPerView={1}>
                    {barbers.map((barber, index) => (
                        <SwiperSlide key={barber.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={barber.image}
                                    alt={barber.name}
                                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center px-4">
                                    <h3 className="text-xl font-heading uppercase tracking-wider text-accent mb-2">
                                        {barber.name}
                                    </h3>
                                    <p className="text-muted mb-4">{barber.role}</p>
                                    <Button href={barber.salonicLink}>
                                        Book with {barber.name}
                                    </Button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}