import React from 'react';
import Select from '../common/Select';
import Toggle from '../common/Toggle';

function SearchForm({
    formData,
    loading,
    rateLimit,
    onSubmit,
    onChange,
    onClear,
    onCopyLink,
    onCopyMarkdown,
    onDownloadJSON,
}) {
    return (
        <>
            <section className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur">
                <form onSubmit={onSubmit} className="space-y-4">
                    {/* Username + Actions */}
                    <div className="flex flex-col gap-3 md:flex-row md:items-end">
                        <div className="flex-1">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-slate-200"
                            >
                                GitHub username
                            </label>

                            <div className="mt-2 flex gap-2">
                                <input
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={onChange}
                                    placeholder="e.g. Ankurkumar45"
                                    autoComplete="off"
                                    spellCheck="false"
                                    className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-400/60"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    Generate
                                </button>
                            </div>

                            <p className="mt-2 text-xs text-slate-400">
                                Tip: Add <span className="font-mono">?user=USERNAME</span> to the URL
                                to auto-load.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 md:w-82.5">
                            <button
                                type="button"
                                onClick={onCopyLink}
                                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10"
                            >
                                Copy share link
                            </button>

                            <button
                                type="button"
                                onClick={onCopyMarkdown}
                                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10"
                            >
                                Copy Markdown
                            </button>

                            <button
                                type="button"
                                onClick={onDownloadJSON}
                                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10"
                            >
                                Download JSON
                            </button>

                            <button
                                type="button"
                                onClick={onClear}
                                className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm hover:bg-white/10"
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Advanced Options */}
                    <details className="group">
                        <summary className="cursor-pointer select-none text-sm text-slate-200">
                            <span className="inline-flex items-center gap-2">
                                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs">
                                    Options
                                </span>
                                <span className="text-slate-400">
                                    Sort, group, and filter your timeline
                                </span>
                            </span>
                        </summary>

                        <div className="mt-4 grid gap-3 md:grid-cols-4">
                            {/* Timeline date */}
                            <Select
                                label="Timeline date"
                                name="dateField"
                                value={formData.dateField}
                                onChange={onChange}
                                options={[
                                    { value: "created_at", label: "Created" },
                                    { value: "updated_at", label: "Updated" },
                                    { value: "pushed_at", label: "Last push" },
                                ]}
                            />

                            {/* Sort by */}
                            <Select
                                label="Sort by"
                                name="sortBy"
                                value={formData.sortBy}
                                onChange={onChange}
                                options={[
                                    { value: "date", label: "Timeline date" },
                                    { value: "stars", label: "Stars" },
                                    { value: "name", label: "Name" },
                                    { value: "size", label: "Size" },
                                ]}
                            />

                            {/* Order */}
                            <Select
                                label="Order"
                                name="order"
                                value={formData.order}
                                onChange={onChange}
                                options={[
                                    { value: "desc", label: "Newest / highest first" },
                                    { value: "asc", label: "Oldest / lowest first" },
                                ]}
                            />

                            {/* Group */}
                            <Select
                                label="Group"
                                name="group"
                                value={formData.group}
                                onChange={onChange}
                                options={[
                                    { value: "year", label: "Year" },
                                    { value: "month", label: "Month" },
                                    { value: "none", label: "None" },
                                ]}
                            />

                            {/* Search */}
                            <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-slate-300">
                                    Search repos
                                </label>
                                <input
                                    name="search"
                                    value={formData.search}
                                    onChange={onChange}
                                    placeholder="Filter by name, description, or language…"
                                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm placeholder:text-slate-500 outline-none focus:border-indigo-400/60"
                                />
                            </div>

                            {/* Forks */}
                            <Select
                                label="Forks"
                                name="forks"
                                value={formData.forks}
                                onChange={onChange}
                                options={[
                                    { value: "exclude", label: "Exclude forks" },
                                    { value: "include", label: "Include forks" },
                                    { value: "only", label: "Only forks" },
                                ]}
                            />

                            {/* Toggles */}
                            <Toggle
                                label="Include archived"
                                name="archived"
                                checked={formData.archived}
                                onChange={onChange}
                            />

                            <Toggle
                                label="Use local cache"
                                name="cache"
                                checked={formData.cache}
                                onChange={onChange}
                            />

                            <Toggle
                                label="Compact view"
                                name="compact"
                                checked={formData.compact}
                                onChange={onChange}
                            />
                        </div>
                    </details>

                    {/* Footer */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className="text-xs text-slate-400">
                            Note: private repos are not accessible without authentication.
                        </div>
                        <div className="text-xs text-slate-400">{rateLimit}</div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default SearchForm;
