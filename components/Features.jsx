import React from "react";

export default function Features() {
  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-center">
        Everything Your Team Needs to Work Smarter
      </h3>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mt-3">
        From task tracking to real-time chat, our features keep your team connected,
        organized, and moving forward — together.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400)",
          }}
        >
          <div className="bg-gradient-to-t from-black/40 to-transparent p-6 h-full flex items-end">
            <div>
              <h4 className="text-white text-xl font-semibold">Built-In Team Chat</h4>
              <p className="text-white/90 mt-2">
                Communicate instantly within projects — no need to switch apps.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-100 p-6 flex flex-col justify-center shadow-lg">
          <h4 className="font-semibold">Task Assignment</h4>
          <p className="text-slate-700 mt-2 text-sm">
            Easily create, assign, and track tasks to keep everyone aligned.
          </p>
        </div>

        <div className="rounded-2xl bg-amber-200 p-6 shadow-lg">
          <h4 className="font-semibold">Real-Time Scheduling</h4>
          <p className="text-slate-700 mt-2 text-sm">
            Plan meetings, set deadlines, and sync calendars for your team.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-6 shadow-lg">
          <h4 className="font-semibold">Progress Tracking</h4>
          <p className="text-slate-700 mt-2 text-sm">
            Visualize performance with dashboards showing what's next.
          </p>
        </div>
      </div>
    </section>
  );
}
