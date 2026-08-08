"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/eboard", label: "Eboard" },
    { href: "/membership", label: "Membership" },
    { href: "/resources", label: "Resources" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="relative z-30 flex items-center justify-between bg-paper px-gutter py-5 lg:px-gutter-lg lg:py-[30px]">
                <Link
                    href="/"
                    className="font-display text-title text-ink whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                >
                    ALPFA <span className="text-stone">Penn State</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="font-mono text-label uppercase tracking-[0.12em] text-graphite py-3 -my-3 pl-4 lg:hidden"
                >
                    Menu
                </button>

                <nav className="hidden lg:flex gap-[30px] text-ui text-graphite">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-opacity hover:opacity-60"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </header>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-50 flex flex-col bg-alpfa-blue px-gutter py-5 lg:hidden"
                >
                    <div className="flex items-center justify-between">
                        <span className="font-display text-title text-white whitespace-nowrap">
                            ALPFA <span className="text-sky">Penn State</span>
                        </span>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="font-mono text-label uppercase tracking-[0.12em] text-sky py-3 -my-3 pl-4"
                        >
                            Close
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 mt-16">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-display font-light text-display-md text-white transition-opacity hover:opacity-70"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>


                    <a
                        href="https://instagram.com/alpfapsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto font-mono text-meta uppercase tracking-mono text-sky"
                    >
                        @alpfapsu
                    </a>
                </div >
            )
}
        </>
    );
}