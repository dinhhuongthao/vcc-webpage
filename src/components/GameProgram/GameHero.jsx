import React from 'react'
import { assets } from '../../assets/assets';

export default function GameHero() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1b0f3a] to-[#0b0d2a] text-white">
            {/* decorative glow */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="px-4 py-16 md:py-24 md:px-0">
                <div className="grid w-full md:max-w-none md:mx-0 grid-cols-1 items-center gap-10 md:grid-cols-2">
                    {/* LEFT: Copy */}
                    <div className="md:ml-12">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-300">Program</p>
                        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                            <span className="block">Game Design</span>
                            <span className="block">and Development</span>
                        </h1>

                        <ul className="mt-8 space-y-4 text-sm md:text-base">
                            <Feature>Training goal: game development, programming, 2D/3D game design</Feature>
                            <Feature>Highlighted courses: Unity, game programming, game art,…</Feature>
                            <Feature>Intensive semester & capstone project</Feature>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#apply" className="rounded-2xl bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:translate-y-[-1px] hover:bg-fuchsia-500 active:translate-y-0">Apply Now</a>
                            <a href="#curriculum" className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">View Curriculum</a>
                        </div>
                    </div>

                    {/* RIGHT: Illustration */}
                    <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] md:max-w-[700px] lg:max-w-[820px] md:ml-auto hidden md:block">
                        <div className='absolute right-0 w-100'>
                            <img src={assets.hero_img} alt="Game Design and Development" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* subtle top border gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
}

function Feature({ children }) {
    return (
        <li className="group flex items-start gap-3 leading-relaxed">
            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-fuchsia-500/20 ring-1 ring-fuchsia-400/40">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fuchsia-300">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </span>
            <span className="text-white/90">{children}</span>
        </li>
    );
}

function GamepadIllustration() {
    return (
        <svg viewBox="0 0 720 540" className="h-full w-full">
            {/* background gradient blob */}
            <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="btn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
            </defs>

            <rect x="0" y="0" width="720" height="540" rx="32" fill="url(#g1)" />

            {/* rocket */}
            <g transform="translate(440 120)">
                <path d="M40 0c40 40 40 120 0 160-40-40-40-120 0-160z" fill="#e11d48" />
                <rect x="-6" y="64" width="12" height="36" rx="6" fill="#f59e0b" />
                <path d="M-12 108 L0 96 L12 108" fill="#ef4444" />
            </g>

            {/* simplified gamepad */}
            <g transform="translate(120 180)">
                <rect x="0" y="0" width="480" height="220" rx="80" fill="#e5e7eb" />
                <rect x="40" y="80" width="90" height="20" rx="10" fill="#111827" opacity=".9" />
                <circle cx="115" cy="120" r="34" fill="#111827" opacity=".9" />
                {/* D-pad */}
                <g fill="#0f172a" transform="translate(115 120)">
                    <rect x="-8" y="-24" width="16" height="48" rx="4" />
                    <rect x="-24" y="-8" width="48" height="16" rx="4" />
                </g>
                {/* ABXY */}
                <g transform="translate(380 110)">
                    <circle cx="0" cy="0" r="14" fill="url(#btn)" />
                    <circle cx="-36" cy="-12" r="10" fill="#22d3ee" />
                    <circle cx="-36" cy="12" r="10" fill="#34d399" />
                    <circle cx="-18" cy="0" r="10" fill="#fbbf24" />
                </g>
                {/* small screen */}
                <rect x="200" y="60" width="150" height="90" rx="10" fill="#0ea5e9" opacity=".85" />
            </g>

            {/* avatars */}
            <g transform="translate(420 56)">
                <circle cx="0" cy="0" r="22" fill="#60a5fa" />
                <rect x="-18" y="10" width="36" height="18" rx="9" fill="#93c5fd" />
            </g>
            <g transform="translate(270 360)">
                <circle cx="0" cy="0" r="22" fill="#fb7185" />
                <rect x="-18" y="10" width="36" height="18" rx="9" fill="#fecaca" />
            </g>

            {/* dots */}
            {[...Array(40)].map((_, i) => (
                <circle key={i} cx={40 + (i * 16) % 640} cy={40 + ((i * 36) % 440)} r="1.5" fill="#94a3b8" opacity=".5" />
            ))}
        </svg>
    );
}
