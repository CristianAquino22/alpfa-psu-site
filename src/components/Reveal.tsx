"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-[var(--ease-reveal)] motion-reduce:transition-none
        ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[14px] lg:translate-y-[28px] motion-reduce:opacity-100 motion-reduce:translate-y-0"
                }`}
        >
            {children}
        </div>
    );
}