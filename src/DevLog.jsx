import Header from "./components/Header.jsx"
import { devLog } from "./data/devlog.js"
import './index.css'

const tagStyles = {
  Feature: 'bg-[#e8f5f8] text-[#2a8fa0] border border-[#b8d8e0]',
  Fix: 'bg-red-50 text-red-500 border border-red-100',
  Design: 'bg-violet-50 text-violet-500 border border-violet-100',
  Infra: 'bg-sky-50 text-sky-500 border border-sky-100',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function DevLog() {
  return (
    <div className="bg-[#eef2f7] text-[#1a2332] min-h-screen">
      <Header activePath="/devlog" />

      <main>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16">
              <div className="text-sm md:text-base uppercase tracking-[0.35em] mb-6 font-medium text-slate-400">
                Progress
              </div>
              <h1 className="text-5xl md:text-6xl leading-[0.95] mb-6 font-[Cormorant_Garamond] font-light tracking-[-0.04em] text-[#1a2332]">
                Dev <span className="text-slate-400 italic">Log.</span>
              </h1>
              <p className="text-lg leading-8 max-w-xl text-slate-500">
                A running record of what's shipping on BRMonitor, as it happens.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
              <div className="space-y-10">
                {devLog.map((entry) => (
                  <div key={entry.date + entry.title} className="relative pl-10">
                    <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full border-2 border-[#2a8fa0] bg-[#eef2f7]" />
                    <div className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-sm">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          {formatDate(entry.date)}
                        </div>
                        <div className={`inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${tagStyles[entry.tag] ?? tagStyles.Feature}`}>
                          {entry.tag}
                        </div>
                      </div>
                      <h2 className="text-2xl mb-3 text-[#1a2332] font-[Cormorant_Garamond] font-light tracking-[-0.03em]">
                        {entry.title}
                      </h2>
                      <p className="text-slate-500 leading-7">{entry.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
