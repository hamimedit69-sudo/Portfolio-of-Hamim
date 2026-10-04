"use client";

export default function RealEstateProject() {
    return (
        <article className="group w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">

            {/* Project Preview */}
            <div className="relative overflow-hidden bg-[#181818]">
                <img
                    src="/projects/real-estate/hero-section.png"
                    alt="Real Estate Website preview"
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <a
                        href="https://real-state-kappa-gold.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                    >
                        View Live Website
                    </a>
                </div>
            </div>

            {/* Project Information */}
            <div className="p-7 sm:p-8 lg:p-10">

                {/* Number */}
                <p className="mb-3 text-sm font-medium tracking-[0.2em] text-white/40">
                    01
                </p>

                {/* Title */}
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Real Estate Website
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                    A modern and responsive real estate platform designed to provide
                    a smooth property browsing experience with intuitive navigation,
                    clean layouts, and a polished user-focused interface.
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                        Next.js
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                        Tailwind CSS
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
                        Responsive Design
                    </span>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">

                    <a
                        href="https://real-state-kappa-gold.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                    >
                        Live Demo ↗
                    </a>

                    <a
                        href="https://github.com/hamimedit69-sudo/real-state"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                        GitHub ↗
                    </a>

                </div>
            </div>
        </article>
    );
}