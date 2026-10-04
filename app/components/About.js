const skills = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "REST APIs",
    "Responsive design",
];

const textured = {
    // put your image in the public folder and change the file name here
    backgroundImage:
        "url('/images/Cover.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

export default function About() {
    return (
        <section id="about" style={textured} className="scroll-mt-20 text-white">
            <div className="w-full py-20 px-6 sm:px-16 lg:px-24">
                <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
                    About me
                </h2>

                <div className="mt-12 grid gap-12 md:grid-cols-5">
                    <div className="space-y-5 text-lg leading-relaxed text-white/90 md:col-span-3">
                        <p>
                            I&apos;m Hamim, a full stack developer who builds modern,
                            responsive web apps. I care about interfaces that load fast, look
                            right on every screen and are easy to use.
                        </p>
                        <p>
                            My recent work includes a health dashboard, a real estate site, a
                            car rental site and a restaurant site.
                        </p>
                        <p>
                            I&apos;m open to freelance projects and full-time roles. If you
                            have something to build, get in touch.
                        </p>
                        <a
                            href="#contact"
                            className="mt-4 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#5b0f1c] transition hover:bg-white/85"
                        >
                            Contact me
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold">What I work with</h3>
                        <ul className="mt-5 flex flex-wrap gap-3">
                            {skills.map((s) => (
                                <li
                                    key={s}
                                    className="rounded-full border border-white/40 px-4 py-2 text-sm"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}