import React from "react";

export default function CTA() {
  return (
    <section className="mt-16 bg-white p-8 rounded-2xl shadow-inner text-center">
      <h3 className="text-xl font-bold">Proven Results, Real Impact</h3>
      <p className="text-slate-600 mt-2">
        See how teams worldwide are working faster, communicating better, and
        getting more done.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="bg-slate-900 text-amber-50 px-6 py-3 rounded-full">
          Start free trial
        </button>
        <button className="px-6 py-3 rounded-full border">Request demo</button>
      </div>
    </section>
  );
}
