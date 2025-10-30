import React from "react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="font-semibold text-xl">Flowblox</div>
      <nav className="hidden md:flex gap-8 text-sm text-slate-700 items-center">
        <a className="hover:underline" href="#">Services</a>
        <a className="hover:underline" href="#">Features</a>
        <a className="hover:underline" href="#">Blog</a>
        <a className="hover:underline" href="#">Pricing</a>
        <button className="ml-4 bg-slate-900 text-amber-50 px-4 py-2 rounded-full text-sm">
          Get started
        </button>
      </nav>
      <button className="md:hidden p-2">☰</button>
    </header>
  );
}
