"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type Flyer = {
    src: string;
    alt: string;
};

export default function FlyerGrid({
    flyers,
    featured = false,
}: {
    flyers: Flyer[];
    featured?: boolean;
}) {
    const [openFlyer, setOpenFlyer] = useState<Flyer | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!openFlyer) return;

        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpenFlyer(null);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [openFlyer]);

    const lightbox = openFlyer ? (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-gutter pt-20 pb-10 lg:p-16 cursor-zoom-out"
            onClick={() => setOpenFlyer(null)}
        >
            <button
                type="button"
                onClick={() => setOpenFlyer(null)}
                aria-label="Close flyer"
                className="absolute top-4 right-gutter z-20 font-mono text-label uppercase tracking-mono
                  text-white/90 py-3 px-2 transition-opacity hover:opacity-60 lg:right-gutter-lg"
            >
                Close
            </button>

            <Image
                src={openFlyer.src}
                alt={openFlyer.alt}
                width={1000}
                height={1250}
                sizes="(max-width: 1024px) 100vw, 768px"
                onClick={(event) => event.stopPropagation()}
                className="h-auto max-h-full w-auto max-w-full object-contain cursor-default"
            />
        </div>
    ) : null;

    return (
        <>
            <ul
                className={`group/list ${featured
                        ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10"
                        : "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-6"
                    }`}
            >
                {flyers.map((flyer) => (
                    <li
                        key={flyer.src}
                        className="transition-all duration-500 ease-out
                          lg:group-hover/list:scale-[0.94] lg:group-hover/list:opacity-40
                          lg:hover:scale-105! lg:hover:opacity-100! lg:hover:z-10
                          relative motion-reduce:transition-none
                          motion-reduce:lg:group-hover/list:scale-100
                          motion-reduce:lg:hover:scale-100!"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenFlyer(flyer)}
                            className="block w-full cursor-zoom-in"
                            aria-label={`View flyer: ${flyer.alt}`}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-surface shadow-plate lg:shadow-plate-lg">
                                <Image
                                    src={flyer.src}
                                    alt={flyer.alt}
                                    fill
                                    sizes={
                                        featured
                                            ? "(max-width: 640px) 100vw, 50vw"
                                            : "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    }
                                    className="object-cover"
                                />
                            </div>
                        </button>
                    </li>
                ))}
            </ul>

            {mounted && lightbox ? createPortal(lightbox, document.body) : null}
        </>
    );
}