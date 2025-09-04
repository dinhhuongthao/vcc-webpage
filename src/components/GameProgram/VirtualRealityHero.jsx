import React from 'react'
import { assets } from '../../assets/assets';

export default function VirtualRealityHero() {
    return (
        <section className="relative isolate w-screen overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1a0f38] to-[#0b0d2a] text-white">
            {/* decorative blobs */}
            <div className="pointer-events-none absolute -top-32 left-10 h-40 w-40 rotate-12 rounded-3xl bg-fuchsia-600/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 right-10 h-44 w-44 -rotate-12 rounded-3xl bg-indigo-600/25 blur-2xl" />

            <div className="pointer-events-none absolute top-10  w-[200px]">
                <img src={assets.arrow_img}></img>
            </div>

            {/* outer paddings: full width at md+ */}
            <div className="px-4 md:px-24 py-10 md:py-16">

                {/* CARD */}
                <div className="relative mx-4 md:mx-10 lg:mx-16 overflow-hidden rounded-[36px] bg-white/90 text-[#2f1d67] shadow-[0_10px_40px_rgba(0,0,0,.25)]">
                    {/* BACKGROUND */}
                    <div className='absolute w-3/4 left-0 bottom-0 lg:block hidden'>
                        <img src={assets.virtual_img}></img>
                    </div>
                    {/* CONTENT GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 p-8 lg:p-14 lg:p-16">
                        {/* LEFT art area */}
                        <div className="relative order-2 lg:order-1 min-h-[260px] lg:min-h-[360px]">
                        </div>


                        {/* RIGHT text area */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center lg:mb-48">
                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#3a2585]">
                                Virtual reality <br /> game
                            </h2>
                            <p className="mt-4 max-w-lg text-sm lg:text-base text-[#5a48a8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#more" className="mt-6 inline-flex w-max items-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:translate-y-[-1px] active:translate-y-0">
                                See more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}