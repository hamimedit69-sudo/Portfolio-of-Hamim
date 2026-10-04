// Replace with your real projects. Put images in /public/projects/
const projects = [
    {
        title: "Real Estate",
        description: "A modern real estate website for managing and browsing properties, with listings, agents, services and a quick quote form.",
        tech: "Next.js,React,Tailwind",
        image: "/images/realstate.png",
        live: "https://real-state-kappa-gold.vercel.app/",
        code: "https://github.com/hamimedit69-sudo/real-state",
    },
    {
        title: "Rent Cars",
        description: "A car rental website where users search by location and dates, browse rental deals and book a car in a few clicks.",
        tech: "Next.js,React,Tailwind",
        image: "/images/rentalcars.png",
        live: "https://rental-car-ten-alpha.vercel.app/",
        code: "https://github.com/hamimedit69-sudo/rental-car",
    },
    {
        title: "Health Overview",
        description: "A health tracking dashboard with live vitals, an activity growth chart, a BMI calculator and body measurements, all in one clean view.",
        tech: "Next.js,React,Tailwind",
        image: "/images/healthoverview.png",
        live: "https://health-overview-swart.vercel.app/   ",
        code: "https://github.com/hamimedit69-sudo/Health-Overview",
    },
    {
        title: "TandoorHut",
        description: "A bold restaurant website with a menu category slider and a quick Check Menu button to help visitors start ordering food.",
        tech: "Next.js,React,Tailwind",
        image: "/images/restraunt.png",
        live: "https://restaurant-app-neon-beta.vercel.app/",
        code: "https://github.com/hamimedit69-sudo/Restaurant-App",
    },
];


const sectionStyle = {
    backgroundImage: "url('/images/Cover.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#4a0030", // shows while the image loads
};

const headingStyle = {
    fontFamily: '"Arial Black", Impact, Helvetica, sans-serif',
    fontSize: "clamp(40px, 6vw, 84px)",
};

export default function Projects() {
    return (
        // min-h-screen + flex centering: on desktop all 4 projects fit in one screen
        <section
            id="projects"
            style={sectionStyle}
            className="flex min-h-screen flex-col justify-center px-6 py-20 text-white md:px-12 lg:px-14"
        >
            <h4
                style={headingStyle}
                className="mb-10 font-black leading-none tracking-tight lg:mb-14"
            >
                FRONT END PROJECTS
            </h4>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {projects.map((p) => (
                    <article key={p.title} className="group">
                        <div className="mb-4 overflow-hidden bg-black/40">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="block h-auto w-full transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
                        <p className="mb-2 text-base leading-relaxed text-white/70">
                            {p.description}
                        </p>
                        <p className="mb-4 text-sm text-white/50">{p.tech}</p>

                        <div className="flex gap-6">
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                className="border-b-2 border-white pb-0.5 text-base font-bold hover:opacity-75"
                            >
                                Live Demo
                            </a>
                            <a
                                href={p.code}
                                target="_blank"
                                rel="noreferrer"
                                className="border-b-2 border-white pb-0.5 text-base font-bold hover:opacity-75"
                            >
                                View Code
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}