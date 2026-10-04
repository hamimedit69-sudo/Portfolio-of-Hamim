"use client";

import { useState } from "react";

const EMAIL = "aousafhamim46@gmail.com"; // replace with your email

const socials = [
    { name: "Instagram", href: "https:www.instagram.com/hamim_khan72?stkn=dnQ0N2hxaTN2enZr" },
    { name: "GitHub", href: "https://github.com/hamimedit69-sudo" },
    { name: "LinkedIn", href: "https:www.linkedin.com/in/hamim-hamim-50450a368" },
];

const textured = {

    // put your image in the public folder and change the file name here
    backgroundImage:
        "url('/images/Cover.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const field =
    "w-full rounded-lg border border-white/30 bg-black/20 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white focus:ring-2 focus:ring-white/40";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <section id="contact" style={textured} className="scroll-mt-20 text-white">
            <div className="w-full py-20 px-6 sm:px-16 lg:px-24">
                <h2 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
                    Let&apos;s work together
                </h2>

                <div className="mt-12 grid gap-12 md:grid-cols-5">
                    <div className="space-y-6 md:col-span-2">
                        <p className="text-lg text-white/90">
                            Tell me about your project and I&apos;ll reply by email.
                        </p>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="block break-all text-xl font-bold underline underline-offset-4"
                        >
                            {EMAIL}
                        </a>
                        <ul className="flex gap-5">
                            {socials.map((s) => (
                                <li key={s.name}>
                                    <a href={s.href} target="_blank" rel="noreferrer" className="hover:underline">
                                        {s.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <form onSubmit={submit} className="space-y-4 md:col-span-3">
                        <label className="block">
                            <span className="mb-1 block text-sm">Your name</span>
                            <input name="name" required value={form.name} onChange={update} className={field} placeholder="Jane Doe" />
                        </label>
                        <label className="block">
                            <span className="mb-1 block text-sm">Your email</span>
                            <input name="email" type="email" required value={form.email} onChange={update} className={field} placeholder="jane@example.com" />
                        </label>
                        <label className="block">
                            <span className="mb-1 block text-sm">Message</span>
                            <textarea name="message" required rows={6} value={form.message} onChange={update} className={field} placeholder="What do you want to build?" />
                        </label>
                        <button type="submit" className="rounded-full bg-white px-7 py-3 font-bold text-[#5b0f1c] transition hover:bg-white/85">
                            Send message
                        </button>
                        {sent && (
                            <p role="status" className="text-sm text-white/90">
                                Your email app should open with the message ready to send.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}