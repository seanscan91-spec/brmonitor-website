import { useState } from "react"
import './index.css'

export default function BRMonitorLanding() {
  const [navActive, setNavActive] = useState(null)
  const [workflowActive, setWorkflowActive] = useState(null)
  const regulations = [
    ['Part A – Structure', 'M. Chen', 'Approved', '3'],
    ['Part B – Fire Safety', 'S. Patel', 'In Review', '7'],
    ['Part F – Ventilation', 'L. Nguyen', 'Uploaded', '4'],
    ['Part K – Protection from Falling', 'Unassigned', 'Outstanding', '0'],
  ]

  const statusStyles = {
    Approved: 'bg-teal-400/15 text-teal-300 border border-teal-400/25',
    'In Review': 'bg-amber-400/15 text-amber-300 border border-amber-400/25',
    Uploaded: 'bg-sky-400/15 text-sky-300 border border-sky-400/25',
    Outstanding: 'bg-red-400/15 text-red-300 border border-red-400/25',
  }

  return (
    <div className="bg-[#eef2f7] text-[#1a2332] min-h-screen overflow-hidden">

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
              {[
                ['Platform', '#platform'],
                ['Workflow', '#workflow'],
                ['Regulations', '#regulations'],
                ['Roadmap', '#roadmap'],
                ['Founder', '#founder'],
              ].map((item, index) => (
                <a
                  key={item[0]}
                  href={item[1]}
                  onClick={() => setNavActive(index)}
                  className={`rounded-xl px-4 py-2 text-sm transition-all duration-200 ${navActive === index ? 'bg-[#2a8fa0] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-white hover:shadow-sm'}`}
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

      <main>
        <section id="platform" className="py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm md:text-base uppercase tracking-[0.35em] mb-6 font-medium text-slate-400">
                Confidence in Compliance
              </div>
              <h1 className="text-5xl md:text-6xl leading-[0.95] mb-8 font-[Cormorant_Garamond] font-light tracking-[-0.04em] text-[#1a2332]">
                All <span className="text-slate-400 italic">Regulations.</span>
                <br />
                One live platform.
              </h1>
              <p className="text-lg leading-8 mb-10 max-w-xl text-slate-500">
                BRMonitor brings every Regulation, document, comment and consultant workflow into one operational workspace.
                <span className="block mt-5 text-base leading-7 text-slate-400">
                  <span className="italic">Industry expertise, built into every feature.</span>
                </span>
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:sean@sbrcompliance.co.uk?subject=BRMonitor%20Introduction"
                  className="inline-flex items-center rounded-xl bg-[#2a8fa0] px-7 py-4 text-white font-medium shadow-[0_8px_24px_rgba(42,143,160,0.3)] hover:bg-[#237d8c] transition-colors"
                >
                  Get in Touch
                </a>
                <button className="rounded-xl border border-slate-200 bg-white px-7 py-4 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#2a8fa0]/5 blur-3xl rounded-full" />
              <div className="relative rounded-[32px] overflow-hidden border border-[#2a3f52]/20 bg-[#1e2d3d] shadow-[0_20px_60px_rgba(30,45,61,0.2)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,143,160,0.08),transparent_35%)] pointer-events-none" />
                <div className="h-14 border-b border-white/10 px-5 flex items-center justify-between bg-[#182432]">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-teal-400/70" />
                    <div className="ml-4 text-[11px] uppercase tracking-[0.25em] text-white/30">
                      brmonitor.app / portfolio / maple-court
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/30">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Live Workspace
                  </div>
                </div>
                <div className="relative p-8 bg-[#1a2838]">
                  <div className="relative mx-auto max-w-[760px] rounded-[28px] border border-white/10 bg-[#1e2d3d] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-400/70" />
                      </div>
                      <div className="text-sm font-medium text-white/70">Dashboard</div>
                      <div className="text-white/20">×</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      {[
                        ['Projects', '24', '+12%', 'teal'],
                        ['Outstanding', '18', '-8%', 'red'],
                        ['Overdue', '3', '-25%', 'amber'],
                        ['Compliance', '92%', '+14%', 'teal'],
                      ].map((item) => (
                        <div key={item[0]} className="rounded-2xl border border-white/10 bg-[#243447] p-4">
                          <div className="text-xs text-white/40 mb-3">{item[0]}</div>
                          <div className={`${item[3] === 'teal' ? 'text-teal-300' : item[3] === 'red' ? 'text-red-400' : 'text-amber-300'} text-4xl font-semibold tracking-tight mb-2`}>
                            {item[1]}
                          </div>
                          <div className={`text-xs ${item[3] === 'teal' ? 'text-teal-400' : item[3] === 'red' ? 'text-red-400' : 'text-amber-400'}`}>
                            {item[2]}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-4">
                      <div className="rounded-2xl border border-white/10 bg-[#243447] p-5">
                        <div className="text-sm text-white/60 mb-5 font-medium">Recent activity</div>
                        <div className="space-y-4">
                          {[
                            ['New comment on Riverside Block A', '2m ago', 'teal'],
                            ['Consultant response received', '15m ago', 'teal'],
                            ['Regulation assigned', '1h ago', 'sky'],
                          ].map((item) => (
                            <div key={item[0]} className="flex items-start gap-3">
                              <div className={`mt-1.5 w-2 h-2 rounded-full ${item[2] === 'sky' ? 'bg-sky-400' : 'bg-teal-400'}`} />
                              <div className="flex-1">
                                <div className="text-sm text-white/65 leading-6">{item[0]}</div>
                                <div className="text-xs text-white/30 mt-1">{item[1]}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-[#243447] p-5">
                        <div className="text-sm text-white/60 mb-5 font-medium">Compliance status</div>
                        <div className="flex items-center justify-center">
                          <div className="relative flex items-center justify-center w-40 h-40 rounded-full p-[14px]" style={{background: 'conic-gradient(#2dd4bf 0deg 294deg, #1e2d3d 294deg 298deg, #f59e0b 298deg 332deg, #1e2d3d 332deg 336deg, #ef4444 336deg 354deg, #1e2d3d 354deg 360deg)', transform: 'rotate(-90deg)'}}>
                           <div className="flex flex-col items-center justify-center w-full h-full rounded-full bg-[#1e2d3d]" style={{transform: 'rotate(90deg)'}}>
                            <div className="text-4xl font-semibold text-white">92%</div>
                            <div className="text-sm text-white/40 mt-1">On track</div>
                          </div>
                          </div>
                        </div>
                        <div className="mt-6 space-y-3 text-sm">
                          <div className="flex items-center justify-between text-white/55">
                            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-teal-400" />On track</div>
                            <span>83%</span>
                          </div>
                          <div className="flex items-center justify-between text-white/55">
                            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-amber-400" />At risk</div>
                            <span>11%</span>
                          </div>
                          <div className="flex items-center justify-between text-white/55">
                            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-red-400" />Overdue</div>
                            <span>6%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="regulations" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-5xl md:text-6xl mb-4 font-[Cormorant_Garamond] font-light tracking-[-0.04em] text-[#1a2332]">
                  Live visibility across every <span className="text-slate-400 italic">Regulation.</span>
                </h2>
                <p className="text-lg text-slate-400">Real-time visibility across your projects.</p>
              </div>
            </div>
            <div className="rounded-[32px] overflow-hidden border border-[#2a3f52]/15 bg-[#1e2d3d] shadow-[0_8px_40px_rgba(30,45,61,0.12)]">
              <div className="h-14 border-b border-white/10 px-6 flex items-center justify-between text-sm text-white/35 bg-[#182432]">
                <div>brmonitor.app / projects / maple-court / regulations</div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.2em] text-white/30">
                    <th className="px-6 py-5">Regulation</th>
                    <th className="px-6 py-5">Owner</th>
                    <th className="px-6 py-5">Status</th>
                    <th className="px-6 py-5 text-right">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {regulations.map((item) => (
                    <tr key={item[0]} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                      <td className="px-6 py-5 text-white/80">{item[0]}</td>
                      <td className="px-6 py-5 text-white/55">{item[1]}</td>
                      <td className="px-6 py-5">
                        <div className={`inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${statusStyles[item[2]]}`}>
                          {item[2]}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right text-white/40">💬 {item[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-28 bg-[#eef2f7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <div className="text-sm md:text-base uppercase tracking-[0.3em] text-red-400 mb-4 font-medium">The Problem</div>
              <h2 className="text-5xl md:text-6xl mb-6 font-[Cormorant_Garamond] font-light tracking-[-0.04em] text-[#1a2332]">
                Fragmented workflows <span className="text-slate-400 italic">create risk.</span>
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-500">
                Building Regulation coordination is often spread across disconnected spreadsheets, email chains and fragmented consultant communication, creating operational risk, limited visibility and inconsistent audit trails.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 mb-10">
              {[
            ['Scattered Information', 'Disconnected compliance evidence and project information.', (
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            )],
            ['Manual Handovers', 'Critical coordination managed through manual workflows.', (
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            )],
            ['Slow Comment Resolution', 'Delays caused by fragmented review communication.', (
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )],
            ['Limited Visibility', 'No clear live view across project compliance status.', (
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            )],
          ].map((item) => (
            <div key={item[0]} className="rounded-[28px] border border-red-100 bg-white p-7 shadow-sm">
              <div className="w-12 h-12 rounded-2xl border border-red-100 bg-red-50 mb-6 flex items-center justify-center">
                {item[2]}
              </div>
              <h3 className="text-2xl mb-4 text-[#1a2332] font-[Cormorant_Garamond] font-light tracking-[-0.03em]">{item[0]}</h3>
              <p className="text-slate-500 leading-7">{item[1]}</p>
            </div>
          ))}
            </div>
            <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
              <div className="text-sm uppercase tracking-[0.25em] text-red-400 mb-4">Project Risks</div>
              <div className="flex flex-wrap gap-3">
                {['Poor audit trail', 'No clear ownership', 'Disconnected information', 'Limited visibility'].map((risk) => (
                  <div key={risk} className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm text-red-500">{risk}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <div className="text-sm md:text-base uppercase tracking-[0.3em] text-[#2a8fa0] mb-4 font-medium">The Solution</div>
              <h2 className="text-5xl md:text-6xl mb-6 font-[Cormorant_Garamond] font-light tracking-[-0.04em] text-[#1a2332]">
                One workspace. <span className="text-slate-400 italic">Complete control.</span>
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 mb-10">
             {[
            ['Live Compliance Dashboards', 'Real-time operational visibility across live projects.', (
              <svg className="w-5 h-5 text-[#2a8fa0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )],
            ['Comment Workflows', 'Structured threaded review and response workflows.', (
              <svg className="w-5 h-5 text-[#2a8fa0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )],
            ['Consultant Coordination', 'Clear ownership and consultant accountability.', (
              <svg className="w-5 h-5 text-[#2a8fa0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )],
            ['Portfolio Visibility', 'Monitor compliance positions across multiple projects.', (
              <svg className="w-5 h-5 text-[#2a8fa0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )],
          ].map((item) => (
            <div key={item[0]} className="rounded-[28px] border border-[#b8d8e0] bg-[#e8f5f8] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-2xl border border-[#b8d8e0] bg-white mb-6 flex items-center justify-center">
                {item[2]}
              </div>
              <h3 className="text-2xl mb-4 text-[#1a2332] font-[Cormorant_Garamond] font-light tracking-[-0.03em]">{item[0]}</h3>
              <p className="text-slate-500 leading-7 mb-6">{item[1]}</p>
            </div>
          ))}
            </div>
            <div className="rounded-2xl border border-[#b8d8e0] bg-[#e8f5f8] p-5">
              <div className="text-sm uppercase tracking-[0.25em] text-[#2a8fa0] mb-4">Project Outcomes</div>
              <div className="flex flex-wrap gap-3">
                {['Reduced Risk', 'Complete Audit Trail', 'Clear Ownership', 'Time & Cost Savings'].map((item) => (
                  <div key={item} className="rounded-full border border-[#b8d8e0] bg-white px-4 py-2 text-sm text-[#2a8fa0] shadow-sm">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="border-t border-slate-100 py-28 overflow-hidden bg-[#eef2f7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <div className="text-sm md:text-base uppercase tracking-[0.35em] text-slate-400 mb-6 font-medium">Workflow</div>
              <h2 className="text-5xl md:text-6xl leading-none font-[Cormorant_Garamond] font-light tracking-[-0.05em] text-[#1a2332]">
                From assignment
                <span className="text-slate-400 italic font-light"> to agreement.</span>
              </h2>
            </div>

            <div className="relative mb-20">
              <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-6">
                {[
                  ['01', 'Assign', 'teal'],
                  ['02', 'Upload', 'sky'],
                  ['03', 'Review', 'amber'],
                  ['04', 'Comment', 'red'],
                  ['05', 'Respond', 'violet'],
                  ['06', 'Agree', 'teal'],
                ].map((item) => (
                  <div key={item[0]} className="relative flex flex-col items-center text-center">
                    <div className={`relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm ${item[2] === 'teal' ? 'border-teal-100 bg-teal-50' : item[2] === 'sky' ? 'border-sky-100 bg-sky-50' : item[2] === 'amber' ? 'border-amber-100 bg-amber-50' : item[2] === 'red' ? 'border-red-100 bg-red-50' : 'border-violet-100 bg-violet-50'}`}>
                      <div className={`text-lg font-semibold ${item[2] === 'teal' ? 'text-[#2a8fa0]' : item[2] === 'sky' ? 'text-sky-500' : item[2] === 'amber' ? 'text-amber-500' : item[2] === 'red' ? 'text-red-500' : 'text-violet-500'}`}>
                        {item[0]}
                      </div>
                    </div>
                    <h3 className="mb-3 text-2xl font-[Cormorant_Garamond] font-light tracking-[-0.03em] text-[#1a2332]">
                      {item[1]}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto max-w-5xl rounded-[28px] border border-[#2a3f52]/15 bg-[#1e2d3d] overflow-hidden shadow-[0_12px_40px_rgba(30,45,61,0.15)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-sm text-white/35 bg-[#182432]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <div className="h-3 w-3 rounded-full bg-teal-400/70" />
                </div>
                <div>brmonitor.app / workflow / live-tracking</div>
                <div>active</div>
              </div>
              <div className="grid divide-y divide-white/5 lg:grid-cols-6 lg:divide-y-0 lg:divide-x lg:divide-white/5">
                {[
                  ['Assign', 'Reviewer Assigned', 'teal'],
                  ['Upload', 'Drawings Uploaded', 'sky'],
                  ['Review', 'Compliance Review', 'amber'],
                  ['Comment', 'Comment Issued', 'red'],
                  ['Respond', 'Consultant Response', 'violet'],
                  ['Agree', 'Compliance Agreed', 'teal'],
                ].map((item, index) => (
                  <div key={item[0]} className="relative p-5 cursor-pointer hover:bg-white/[0.04] transition-colors" onClick={() => setWorkflowActive(index)}>
                    {index !== 5 && (
                      <div className="absolute top-1/2 -right-3 z-20 hidden lg:flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1e2d3d]">
                        <div className={`h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent ${item[2] === 'teal' ? 'border-l-teal-400' : item[2] === 'sky' ? 'border-l-sky-400' : item[2] === 'amber' ? 'border-l-amber-400' : item[2] === 'red' ? 'border-l-red-400' : 'border-l-violet-400'}`} />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xs uppercase tracking-[0.25em] text-white/30">{item[0]}</div>
                      <div className={`h-2.5 w-2.5 rounded-full ${item[2] === 'teal' ? 'bg-teal-400' : item[2] === 'sky' ? 'bg-sky-400' : item[2] === 'amber' ? 'bg-amber-400' : item[2] === 'red' ? 'bg-red-400' : 'bg-violet-400'}`} />
                    </div>
                    <div className="space-y-4">
                      <div className="text-base text-white/70 leading-6 min-h-[48px]">{item[1]}</div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-300 ${item[2] === 'teal' ? 'bg-teal-400/70' : item[2] === 'sky' ? 'bg-sky-400/70' : item[2] === 'amber' ? 'bg-amber-400/70' : item[2] === 'red' ? 'bg-red-400/70' : 'bg-violet-400/70'}`}
                          style={{ width: index === 0 ? '16%' : index === 1 ? '33%' : index === 2 ? '50%' : index === 3 ? '66%' : index === 4 ? '83%' : '100%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="border-t border-slate-100 py-28 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <div className="text-sm md:text-base uppercase tracking-[0.3em] text-[#2a8fa0] mb-4 font-medium">Roadmap</div>
              <h2 className="text-5xl md:text-6xl leading-none font-[Cormorant_Garamond] font-light tracking-[-0.05em] text-[#1a2332]">
                Building the future
                <span className="text-slate-400 italic font-light"> of compliance.</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="grid gap-8 lg:grid-cols-4">
                {[
                  ['Q1 2026', 'Concept', 'Initial operational concept and workflow modelling.', 'teal'],
                  ['Q2 2026', 'Development', 'Core platform architecture and live workspace development.', 'sky'],
                  ['Q3 2026', 'Testing', 'Live project testing, refinement and operational feedback.', 'amber'],
                  ['Q4 2026', 'Release', 'Public launch and enterprise onboarding rollout.', 'teal'],
                ].map((item) => (
                  <div key={item[0]} className="relative flex flex-col">
                    <div className={`mb-4 w-full rounded-[28px] border p-6 text-left shadow-sm ${item[3] === 'sky' ? 'border-sky-100 bg-sky-50' : item[3] === 'amber' ? 'border-amber-100 bg-amber-50' : 'border-[#b8d8e0] bg-[#e8f5f8]'}`}>
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">{item[0]}</div>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl text-[#1a2332] font-[Cormorant_Garamond] font-light tracking-[-0.03em]">{item[1]}</div>
                        <div className={`h-3 w-3 rounded-sm ${item[3] === 'sky' ? 'bg-sky-400' : item[3] === 'amber' ? 'bg-amber-400' : 'bg-[#2a8fa0]'}`} />
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-100 bg-[#eef2f7] p-6">
                      <p className="text-sm leading-7 text-slate-500">{item[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="founder" className="border-t border-slate-100 py-28 overflow-hidden bg-[#eef2f7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] items-start">
              <div className="relative flex flex-col items-center gap-6">
                <div className="absolute inset-0 rounded-[40px] bg-[#2a8fa0]/5 blur-3xl" />
                <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] w-full aspect-[4/5] max-h-[420px]">
                  <img
                    src="/sean-scanlon.jpg"
                    alt="Sean Scanlon"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/sean-scanlon-mcabe-mciob-219313129/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 rounded-2xl border border-[#b8d8e0] bg-white px-5 py-3 text-sm text-[#0077b5] shadow-sm hover:bg-[#e8f5f8] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
              <div>
                <div className="text-sm md:text-base uppercase tracking-[0.3em] text-[#2a8fa0] mb-6 font-medium">
                  About Our Founder
                </div>
                <h2 className="text-5xl md:text-6xl leading-[1.05] mb-6 font-[Cormorant_Garamond] font-light tracking-[-0.05em] text-[#1a2332]">
                  Built from real-world
                  <span className="text-slate-400 italic font-light"> Building Regulation experience.</span>
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    'MCABE',
                    'MCIOB',
                    'Registered Building Inspector',
                    'Managing Director, SBR Compliance',
                    '15+ Years Construction Experience',
                    '8+ Years Local Authority Building Control',
                  ].map((item) => (
                    <div key={item} className="rounded-full border border-[#b8d8e0] bg-white px-5 py-2 text-sm text-[#2a8fa0] shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-6 text-lg leading-8 text-slate-500">
                  <p>BRMonitor was founded by Sean Scanlon, Registered Building Inspector and Managing Director of SBR Compliance, following years working across Building Control, consultancy and complex project delivery.</p>
                  <p>With experience spanning Local Authority Building Control, architectural practice consultancy and independent compliance advisory roles, Sean has worked directly with clients, contractors and design teams on higher-risk and technically complex projects.</p>
                  <p>His background includes supporting live healthcare, commercial, education, industrial and regeneration schemes, focusing on pragmatic compliance strategy, early risk identification and structured operational coordination.</p>
                  <p>BRMonitor has been designed to reflect the realities of modern Building Regulation workflows, bringing structure, visibility and accountability into a single live operational platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
