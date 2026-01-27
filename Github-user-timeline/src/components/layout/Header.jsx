import React from 'react';

function Header({ networkStatus }) {
    const statusColor = {
        ready: "bg-emerald-400",
        loading: "bg-indigo-400",
        warn: "bg-amber-400",
        error: "bg-rose-400",
    }[networkStatus?.status || "ready"];
    return (
        <>
            {/* <header class="mb-8">
                <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">GitHub Timeline</h1>
                        <p class="mt-1 text-slate-300">Generate a timeline of a user’s public repositories — sort, filter, and export.</p>
                    </div>
                    <div class="flex items-center gap-2 text-xs text-slate-400">
                        <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 glass">
                            <span class="h-2 w-2 rounded-full bg-emerald-400" id="netDot"></span>
                            <span id="netText">Ready</span>
                        </span>
                        <a class="rounded-full border border-white/10 bg-white/5 px-3 py-1 glass hover:bg-white/10" href="https://docs.github.com/rest" target="_blank" rel="noreferrer">API docs</a>
                    </div>
                </div>
            </header> */}
            <header className="mb-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    {/* Title */}
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            GitHub Timeline
                        </h1>
                        <p className="mt-1 text-slate-300">
                            Generate a timeline of a user’s public repositories — sort, filter,
                            and export.
                        </p>
                    </div>

                    {/* Status + Docs */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
                            <span
                                className={`h-2 w-2 rounded-full ${statusColor}`}
                            />
                            <span>{networkStatus?.text || "Ready"}</span>
                        </span>

                        <a
                            href="https://docs.github.com/rest"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur hover:bg-white/10"
                        >
                            API docs
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
