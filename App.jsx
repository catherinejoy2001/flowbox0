import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900 antialiased">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
