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
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <span className="font-bold text-lg">ALPFA Penn State</span>
            <div className="flex gap-6">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}