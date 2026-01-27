import React from 'react';

function Controls({ username, setUsername, loadUser, loading, error }) {
    return (
        <>
            <section className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 glass">
                <div className="flex flex-col gap-3 md:flex-row md:items-end">
                    <input
                        className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-white/10"
                        placeholder="GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        onClick={loadUser}
                        className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50"
                    >
                        Generate
                    </button>
                </div>
                {error && <p className="text-rose-400 mt-2">{error}</p>}
            </section>

            {/* <section class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 glass">
                <form id="controls" class="space-y-4">
                    <div class="flex flex-col gap-3 md:flex-row md:items-end">
                        <div class="flex-1">
                            <label for="username" class="block text-sm font-medium text-slate-200">GitHub username</label>
                            <div class="mt-2 flex gap-2">
                                <input id="username" class="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400/60 focus:outline-none" placeholder="e.g. torvalds" autocomplete="off" spellcheck="false" />
                                <button id="go" type="submit" class="rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300/50 disabled:cursor-not-allowed disabled:opacity-60">Generate</button>
                            </div>
                            <p class="mt-2 text-xs text-slate-400">Tip: Add <span class="mono">?user=USERNAME</span> to the URL to auto-load.</p>
                        </div>

                        <div class="grid grid-cols-2 gap-2 md:w-[330px]">
                            <button type="button" id="copyLink" class="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10">Copy share link</button>
                            <button type="button" id="exportMd" class="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10">Copy Markdown</button>
                            <button type="button" id="downloadJson" class="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10">Download JSON</button>
                            <button type="button" id="clear" class="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10">Clear</button>
                        </div>
                    </div>

                    <details class="group">
                        <summary class="cursor-pointer select-none text-sm text-slate-200">
                            <span class="inline-flex items-center gap-2">
                                <span class="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs">Options</span>
                                <span class="text-slate-400">Sort, group, and filter your timeline</span>
                            </span>
                        </summary>

                        <div class="mt-4 grid gap-3 md:grid-cols-4">
                            <div>
                                <label class="block text-xs font-medium text-slate-300" for="dateField">Timeline date</label>
                                <select id="dateField" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60">
                                    <option value="created_at">Created</option>
                                    <option value="updated_at">Updated</option>
                                    <option value="pushed_at">Last push</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-slate-300" for="sortBy">Sort by</label>
                                <select id="sortBy" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60">
                                    <option value="date">Timeline date</option>
                                    <option value="stars">Stars</option>
                                    <option value="name">Name</option>
                                    <option value="size">Size</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-slate-300" for="order">Order</label>
                                <select id="order" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60">
                                    <option value="desc">Newest / highest first</option>
                                    <option value="asc">Oldest / lowest first</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-slate-300" for="group">Group</label>
                                <select id="group" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60">
                                    <option value="year">Year</option>
                                    <option value="month">Month</option>
                                    <option value="none">None</option>
                                </select>
                            </div>

                            <div class="md:col-span-2">
                                <label class="block text-xs font-medium text-slate-300" for="search">Search repos</label>
                                <input id="search" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:border-indigo-400/60" placeholder="Filter by name, description, or language…" />
                            </div>

                            <div>
                                <label class="block text-xs font-medium text-slate-300" for="forks">Forks</label>
                                <select id="forks" class="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60">
                                    <option value="exclude">Exclude forks</option>
                                    <option value="include">Include forks</option>
                                    <option value="only">Only forks</option>
                                </select>
                            </div>

                            <div class="flex items-end gap-2">
                                <label class="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
                                    <span class="text-sm text-slate-200">Include archived</span>
                                    <input id="archived" type="checkbox" class="h-4 w-4 accent-indigo-400" />
                                </label>
                            </div>

                            <div class="flex items-end gap-2">
                                <label class="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
                                    <span class="text-sm text-slate-200">Use local cache</span>
                                    <input id="cache" type="checkbox" class="h-4 w-4 accent-indigo-400" checked />
                                </label>
                            </div>

                            <div class="flex items-end gap-2">
                                <label class="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
                                    <span class="text-sm text-slate-200">Compact view</span>
                                    <input id="compact" type="checkbox" class="h-4 w-4 accent-indigo-400" />
                                </label>
                            </div>
                        </div>
                    </details>

                    <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div id="hint" class="text-xs text-slate-400"></div>
                        <div class="text-xs text-slate-400">
                            <span id="rate"></span>
                        </div>
                    </div>
                </form>
            </section> */}
        </>
    );
}

export default Controls;
