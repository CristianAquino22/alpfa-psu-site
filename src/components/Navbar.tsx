import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/eboard", label: "Eboard" },
    { href: "/membership", label: "Membership" },
    { href: "/resources", label: "Resources" },
];

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-alpfa-blue">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logo_alpfa.svg" alt="ALPFA Penn State" width={36} height={36} />
                <span className="font-bold text-lg text-white">ALPFA Penn State</span>
            </Link>
            <div className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}