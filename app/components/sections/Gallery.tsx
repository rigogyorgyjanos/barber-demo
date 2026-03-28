"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
    "/gallery3.jpg",
    "/gallery6.jpg",
    "/gallery2.jpg",
    "/gallery4.jpg",
    "/gallery1.jpg",
    "/gallery5.jpg",
];

export default function Gallery() {
    return (
        <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest mb-12 text-center">
                Our Work
            </h2>

            {/* Desktop Masonry */}
            <div className="hidden md:block columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Mobile Swiper */}
            <div className="md:hidden">
                <Swiper spaceBetween={20} slidesPerView={1}>
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="overflow-hidden rounded-lg cursor-pointer group"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}