// Replace the href values with your real profile links
const socials = [
    {
        name: "Instagram",
        href: "https://instagram.com/your-username",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/your-username",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/your-username",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.11V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z" />
            </svg>
        ),
    },
];

const footerStyle = { background: "black" };

export default function Footer() {
    return (
        <footer
            style={footerStyle}
            className="flex flex-col items-center justify-between gap-5 px-6 py-8 text-white md:flex-row md:px-12 lg:px-14"
        >
            <p className="text-base text-white/70">© 2026 Hamim Khan. All rights reserved.</p>

            <div className="flex items-center gap-6">
                {socials.map((s) => (
                    <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.name}
                        className="text-white hover:opacity-70"
                    >
                        {s.icon}
                    </a>
                ))}

                <a
                    href="#home"
                    className="border-b-2 border-white pb-0.5 text-base font-bold hover:opacity-75"
                >
                    Back to top
                </a>
            </div>
        </footer>
    );
}