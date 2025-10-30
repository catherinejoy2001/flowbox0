import React from "react";

const avatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=800",
  "https://images.unsplash.com/photo-1545996124-70b9d6a3b1b0?q=80&w=800",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
  "https://images.unsplash.com/photo-1531123414780-fc3a6c6d4b47?q=80&w=800",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800",
];

export default function Hero() {
  return (
    <section className="text-center mt-6 md:mt-12">
      <h1 className="text-3xl md:text-4xl font-light">Streamline Your Team,</h1>
      <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
        Supercharge Your Workflow
      </h2>
      <p className="max-w-2xl mx-auto text-slate-600 mt-3">
        All-in-one platform to plan, collaborate, and deliver — faster and smarter.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button className="bg-slate-900 text-amber-50 px-6 py-3 rounded-full shadow hover:scale-105 transition">
          Get started for Free
        </button>
        <button className="px-4 py-3 rounded-full border border-slate-300 text-sm">
          Watch demo
        </button>
      </div>

      <div className="mt-12 flex items-end justify-center gap-4">
        {avatars.map((url, i) => (
          <div
            key={i}
            className={`transform ${i % 2 === 0 ? "-rotate-6" : "rotate-6"} bg-white rounded-xl overflow-hidden shadow-lg`}
            style={{ width: 110, height: 150 }}
          >
            <img src={url} alt={`avatar-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
