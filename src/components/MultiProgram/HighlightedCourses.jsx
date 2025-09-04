import React from 'react'
import { assets } from '../../assets/assets';

export default function HighlightedCourses() {
    return (
        <section className="relative isolate w-screen overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1a0f38] to-[#0b0d2a] text-white">
            {/* background accents (subtle) */}
            <div className="pointer-events-none absolute -top-24 left-0 h-40 w-40 rounded-full bg-fuchsia-600/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-indigo-600/10 blur-2xl" />


            <div className="px-4 md:px-6 lg:px-8 py-14 md:py-20">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="text-sm font-medium text-white/70">
                        What We Will <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Study?</span>
                    </p>
                    <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Highlighted Courses
                    </h2>


                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10 place-items-center">
                        <CourseCard title="Motion Graphics" />
                        <CourseCard title="Motion UI/UX" />
                        <CourseCard title="Video Editing" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CourseCard({ title }) {
    return (
        <div className="group relative w-[260px] rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 shadow-[0_12px_40px_rgba(0,0,0,.35)] transition-transform hover:-translate-y-1">
            {/* Concentric circle placeholder */}
            <div className="relative mx-auto mt-2 h-28 w-28">
                <div className="absolute inset-0 rounded-full bg-white/10" />
                <div className="absolute inset-3 rounded-full bg-white/10" />
                <div className="absolute inset-6 rounded-full bg-white/20" />
            </div>
            <div className="mt-8 text-center text-sm font-semibold text-white/90">{title}</div>
        </div>
    );
}