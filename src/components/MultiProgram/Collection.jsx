import React, { useState } from "react";


export default function OurCollection() {
    // Cắm ảnh thật nếu có (hoặc để mảng rỗng để dùng màu nền placeholder)
    const items = [
        { id: 1, title: "Project 1", img: undefined },
        { id: 2, title: "Project 2", img: undefined },
        { id: 3, title: "Project 3", img: undefined },
        { id: 4, title: "Project 4", img: undefined },
        { id: 5, title: "Project 5", img: undefined },
    ];


    const [active, setActive] = useState(2); // card giữa mặc định (index 2)
    const CARD_W = 260; // bề rộng card (px) – nhớ sync với class w-[260px]
    const OVERLAP = 100; // mức chồng lên nhau


    return (
        <section className="relative isolate w-screen overflow-hidden bg-gradient-to-br from-[#0b0d2a] via-[#1a0f38] to-[#0b0d2a] text-white">
            <div className="px-4 md:px-0 py-14 md:py-20">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="text-sm font-medium text-white/70">
                        Student <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Project</span>
                    </p>
                    <h2 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Our Collection
                    </h2>
                </div>


                {/* Track chứa các thẻ coverflow */}
                <div className="relative mx-auto mt-12 h-[360px] md:h-[420px] max-w-[1100px]">
                    {items.map((it, i) => {
                        const offset = i - active; // vị trí tương đối so với card giữa
                        const translateX = offset * (CARD_W - OVERLAP);
                        const scale = 1 - Math.min(Math.abs(offset) * 0.12, 0.36);
                        const z = 50 - Math.abs(offset); // card giữa nằm trên cùng
                        const opacity = 1 - Math.min(Math.abs(offset) * 0.15, 0.45);


                        const isCenter = offset === 0;


                        return (
                            <button
                                key={it.id}
                                onClick={() => setActive(i)}
                                className={[
                                    "absolute left-1/2 top-0 -translate-x-1/2 will-change-transform",
                                    "transition-transform duration-300 ease-out",
                                    "rounded-2xl focus:outline-none",
                                    isCenter
                                        ? "ring-2 ring-fuchsia-500 shadow-2xl shadow-fuchsia-500/20"
                                        : "ring-1 ring-white/10",
                                ].join(" ")}
                                style={{
                                    width: CARD_W,
                                    height: 340,
                                    transform: `translateX(${translateX}px) scale(${scale})`,
                                    zIndex: z,
                                    opacity,
                                }}
                                aria-label={it.title}
                            >
                                <CollectionCard img={it.img} title={it.title} highlight={isCenter} />
                            </button>
                        );
                    })}


                    {/* Nút điều hướng (tùy chọn) */}
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between px-6">
                        <div className="pointer-events-auto">
                            <ArrowBtn onClick={() => setActive((p) => Math.max(0, p - 1))} />
                        </div>
                        <div className="pointer-events-auto">
                            <ArrowBtn dir="right" onClick={() => setActive((p) => Math.min(items.length - 1, p + 1))} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function CollectionCard({ img, title, highlight }) {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white/30 to-white/10">
            {/* viền tím nhẹ giống ảnh mẫu */}
            <div className={[
                "pointer-events-none absolute inset-0 rounded-2xl",
                highlight ? "ring-2 ring-fuchsia-500" : "ring-1 ring-white/10",
            ].join(" ")} />


            {/* ảnh hoặc placeholder */}
            {img ? (
                <img src={img} alt={title} className="h-full w-full object-cover" />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-white/60">
                    <span className="text-sm">{title}</span>
                </div>
            )}
        </div>
    );
}


function ArrowBtn({ dir = "left", onClick }) {
    const isRight = dir === "right";
    return (
        <button
            onClick={onClick}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
            aria-label={isRight ? "Next" : "Previous"}
        >
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isRight ? "rotate-180" : ""}
            >
                <path d="M14 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}