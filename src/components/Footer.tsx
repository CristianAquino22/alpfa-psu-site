export default function Footer() {
    return (
        <footer className="mt-auto flex flex-col gap-3 border-t border-line bg-paper px-gutter py-8 font-mono text-meta uppercase tracking-mono text-sand sm:flex-row sm:items-center sm:justify-between lg:px-gutter-lg">
            <span>© {new Date().getFullYear()} ALPFA Penn State</span>

            <div className="flex gap-6">
                <a
                    href="https://instagram.com/alpfapsu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-60"
                >
                    @alpfapsu
                </a>

                <a
                    href="mailto:avr6319@psu.edu"
                    className="transition-opacity hover:opacity-60"
                >
                    Contact
                </a>
            </div>
        </footer >
    );
}