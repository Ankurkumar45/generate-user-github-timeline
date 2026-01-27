import React from "react";
import { formatDate, formatNumber } from "../../utils/formatters";

export default function RepoItem({ repo, compact, view }) {
  const dateLabel = formatDate(repo._derived?.primaryDate);

  /* ---------- Badges ---------- */
  const Badge = ({ children }) => (
    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
      {children}
    </span>
  );

  /* ---------- GRID VIEW ---------- */
  if (view === "grid") {
    return (
      <article className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:border-indigo-400/30">
        <div className="flex items-start justify-between gap-3">
          <div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline"
            >
              {repo.name}
            </a>
            <div className="mt-1 text-xs text-slate-400">{dateLabel}</div>
          </div>

          <div className="flex gap-2 text-xs">
            <Badge>★ {formatNumber(repo.stargazers_count)}</Badge>
            <Badge>⑂ {formatNumber(repo.forks_count)}</Badge>
          </div>
        </div>

        {!compact && (
          <p className="mt-3 text-sm text-slate-300">
            {repo.description || "No description"}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {repo.language && <Badge>{repo.language}</Badge>}
          {repo.fork && <Badge>Fork</Badge>}
          {repo.archived && <Badge>Archived</Badge>}
          <Badge>Size: {formatNumber(repo.size)} KB</Badge>
        </div>
      </article>
    );
  }

  /* ---------- TIMELINE VIEW ---------- */
  return (
    <article className="relative pl-10">
      <div
        className="absolute top-5 h-3 w-3 -translate-y-1/2 rounded-full bg-indigo-400"
        style={{ left: "1.5rem" }}
      />

      <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 hover:border-indigo-400/30">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:underline"
              >
                {repo.name}
              </a>
              <span className="text-xs text-slate-400">{dateLabel}</span>
            </div>

            {!compact && (
              <p className="mt-2 text-sm text-slate-300">
                {repo.description || "No description"}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {repo.language && <Badge>{repo.language}</Badge>}
              <Badge>★ {formatNumber(repo.stargazers_count)}</Badge>
              <Badge>⑂ {formatNumber(repo.forks_count)}</Badge>
              <Badge>Issues: {formatNumber(repo.open_issues_count)}</Badge>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {/* Repo Button */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className=" h-content
      inline-flex items-center gap-1.5
      rounded-lg border border-indigo-400/30
      bg-indigo-500/10 px-3 py-1.5
      text-xs font-medium text-indigo-300
      transition hover:bg-indigo-500/20 hover:text-indigo-200
    "
            >
              <span>🔗</span>
              Repo
            </a>

            {/* Homepage Button */}
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
                className="
        inline-flex items-center gap-1.5
        rounded-lg border border-emerald-400/30
        bg-emerald-500/10 px-3 py-1.5
        text-xs font-medium text-emerald-300
        transition hover:bg-emerald-500/20 hover:text-emerald-200
      "
              >
                <span>🌐</span>
                Homepage
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
