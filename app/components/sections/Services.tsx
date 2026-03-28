"use client";

import { motion } from "framer-motion";

type Service = {
    id: number;
    name: string;
    duration: string;
    price: string;
};

const services: Service[] = [
    { id: 1, name: "Classic Haircut", duration: "45 min", price: "8 500 HUF" },
    { id: 2, name: "Beard Trim", duration: "30 min", price: "5 500 HUF" },
    { id: 3, name: "Full Grooming", duration: "90 min", price: "15 000 HUF" },
    { id: 4, name: "Hot Towel Shave", duration: "30 min", price: "6 500 HUF" },
];

export default function Services() {
    return (
        <section
            id="services"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-12 text-center">
                Our Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="flex justify-between items-center bg-secondary p-6 rounded-lg shadow-lg hover:bg-accent hover:text-black transition-colors cursor-pointer"
                    >
                        <div>
                            <h3 className="font-heading text-xl uppercase tracking-wider">
                                {service.name}
                            </h3>
                            <p className="text-muted mt-1">{service.duration}</p>
                        </div>
                        <div className="font-heading text-lg tracking-wide">
                            {service.price}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}