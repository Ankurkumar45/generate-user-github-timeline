import React, { useState } from "react";

/* layout */
import Header from "../components/layout/Header";

/* UI blocks */
import SearchForm from "../components/controls/SearchForm";
import ProfileCard from "../components/profile/ProfileCard";
import TimelineView from "../components/timeline/TimelineView";

/* hooks */
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useRepoFilters } from "../hooks/useRepoFilters";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

/* services */
import { fetchUser } from "../services/githubApi";

export default function Home() {
  /* ---------- STATE ---------- */
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [rateLimit, setRateLimit] = useState("");
  const [lastFetchAt, setLastFetchAt] = useState(null);
  const [view, setView] = useState("timeline");

  const [formData, setFormData] = useState({
    username: "",
    dateField: "created_at",
    sortBy: "date",
    order: "desc",
    group: "year",
    search: "",
    forks: "exclude",
    archived: false,
    cache: true,
    compact: false,
  });

  /* ---------- HOOKS ---------- */
  const networkStatus = useNetworkStatus();
  const { repos, loadRepos, loading } = useGithubRepos();
  const filteredRepos = useRepoFilters(repos, formData);

  /* ---------- HANDLERS ---------- */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("");

    if (!formData.username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    try {
      const userData = await fetchUser(formData.username);
      setUser(userData);

      await loadRepos(formData.username);
      setLastFetchAt(new Date());
    } catch (err) {
      setError(err.message || "Failed to fetch user.");
      setUser(null);
    }
  };

  const handleClear = () => {
    setFormData({
      username: "",
      dateField: "created_at",
      sortBy: "date",
      order: "desc",
      group: "year",
      search: "",
      forks: "exclude",
      archived: false,
      cache: true,
      compact: false,
    });
    setUser(null);
    setError("");
    setStatus("");
  };

  /* ---------- SHARE / EXPORT ---------- */
  const copyShareLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setStatus("Share link copied to clipboard.");
    setTimeout(() => setStatus(""), 1500);
  };

  const exportMarkdown = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(filteredRepos, null, 2)
    );
    setStatus("Markdown copied to clipboard.");
    setTimeout(() => setStatus(""), 1500);
  };

  const downloadJSON = () => {
    const blob = new Blob(
      [JSON.stringify(filteredRepos, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "github-timeline.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ---------- RENDER ---------- */
  return (
    <main className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">
      <Header networkStatus={networkStatus} />

      <SearchForm
        formData={formData}
        loading={loading}
        rateLimit={rateLimit}
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        onClear={handleClear}
        onCopyLink={copyShareLink}
        onCopyMarkdown={exportMarkdown}
        onDownloadJSON={downloadJSON}
      />

      <ProfileCard
        user={user}
        repos={filteredRepos}
        lastFetchAt={lastFetchAt}
      />

      <section className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Timeline</h2>
            <p className="mt-1 text-sm text-slate-300">
              {user
                ? `${user.login} — ${filteredRepos.length} repositories`
                : "Enter a username to generate a timeline."}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView("timeline")}
              className={`rounded-xl px-3 py-2 text-sm ${
                view === "timeline"
                  ? "bg-white/10"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              Timeline
            </button>

            <button
              onClick={() => setView("grid")}
              className={`rounded-xl px-3 py-2 text-sm ${
                view === "grid"
                  ? "bg-white/10"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {status && (
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-100">
            {status}
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-100">
            {error}
          </div>
        )}

        <div className="mt-5">
          <TimelineView
            repos={filteredRepos}
            view={view}
            group={formData.group}
            compact={formData.compact}
            loading={loading}
          />

          {!loading && user && filteredRepos.length === 0 && (
            <div className="rounded-xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-300">
              No repositories matched your filters.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
