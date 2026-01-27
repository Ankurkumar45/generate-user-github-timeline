import React from 'react';
import { formatDate, formatNumber } from "../utils/formatters";

function TimelineItem({ repo }) {
    return (
        <>
            {/* <article className="bg-slate-900 border border-white/10 rounded-xl p-4">
                <div className="flex justify-between">
                    <a href={repo.html_url} target="_blank" className="font-semibold hover:underline">
                        {repo.name}
                    </a>
                    <span className="text-xs text-slate-400">{formatDate(repo.created_at)}</span>
                </div>
                <p className="text-sm text-slate-300 mt-2">{repo.description || "No description"}</p>
                <div className="flex gap-3 text-xs text-slate-400 mt-3">
                    <span>★ {formatNumber(repo.stargazers_count)}</span>
                    <span>⑂ {formatNumber(repo.forks_count)}</span>
                    {repo.language && <span>{repo.language}</span>}
                </div>

            </article> */}
            <section id="profile" class="mb-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 glass"></section>

            <section class="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 glass">
                <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 class="text-lg font-semibold">Timeline</h2>
                        <p id="summary" class="mt-1 text-sm text-slate-300">Enter a username to generate a repo timeline.</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <button id="viewTimeline" class="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15">Timeline</button>
                        <button id="viewGrid" class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">Grid</button>
                    </div>
                </div>

                <div id="status" class="mt-4 hidden rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100"></div>
                <div id="error" class="mt-4 hidden rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-100"></div>

                <div id="results" class="mt-5"></div>
            </section>
        </>
    );
}

export default TimelineItem;
