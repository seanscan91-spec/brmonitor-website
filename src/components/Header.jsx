import { useState } from "react"

const NAV_ITEMS = [
  ['Platform', '/#platform'],
  ['Workflow', '/#workflow'],
  ['Regulations', '/#regulations'],
  ['Roadmap', '/#roadmap'],
  ['Founder', '/#founder'],
  ['Dev Log', '/devlog'],
]

export default function Header({ activePath }) {
  const [navActive, setNavActive] = useState(null)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto rounded-[24px] border border-white/80 bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#c8dde8] bg-[#2a8fa0]">
              <svg viewBox="0 0 100 100" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="28,50 43,65 72,35" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-2xl leading-none font-semibold tracking-[-0.02em] text-[#1a2332]">
                BR<span className="text-[#2a8fa0]">Monitor</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] mt-1 text-slate-400">
                Building Regulations Tracking
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item[0]}
                href={item[1]}
                onClick={() => setNavActive(index)}
                className={`rounded-xl px-4 py-2 text-sm transition-all duration-200 ${(navActive === index || item[1] === activePath) ? 'bg-[#2a8fa0] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm'}`}
              >
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-[#b8d8e0] bg-[#e8f5f8] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2a8fa0]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2a8fa0] animate-pulse" />
              Early Preview
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
