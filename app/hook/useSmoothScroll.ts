import { useCallback } from "react";

export const useSmoothScroll = () => {
    const scrollTo = useCallback((selector: string, offset = 80) => {
        const el = document.querySelector(selector);
        if (!el) return;

        const start = window.scrollY;
        const end = el.getBoundingClientRect().top + window.scrollY - offset;
        const distance = end - start;
        const duration = 700;
        let startTime: number | null = null;

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const animate = (time: number) => {
            if (startTime === null) startTime = time;
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = start + distance * easeInOutQuad(progress);
            window.scrollTo(0, value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return scrollTo;
};