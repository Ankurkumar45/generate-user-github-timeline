import React from "react";
import RepoItem from "./RepoItem";
import GroupHeader from "../timeline/GroupHeader";
// import { monthLabel } from "../../utils/dateHelpers";

export default function TimelineView({
  repos,
  view,
  group,
  compact,
  loading,
}) {
  if (loading) return null;
  if (!repos.length) return null;

  /* ---------- GROUPING ---------- */
  let groups = [];

  if (group === "none") {
    groups = [{ key: "all", label: "All", items: repos }];
  } else {
    const map = new Map();

    repos.forEach((repo) => {
      const d = repo._derived;
      const key =
        group === "month"
          ? d.monthKey || "Unknown"
          : String(d.year || "Unknown");

      if (!map.has(key)) map.set(key, []);
      map.get(key).push(repo);
    });

    groups = [...map.entries()].map(([key, items]) => ({
      key,
      label: group === "month" ? monthLabel(key) : key,
      items,
    }));
  }

  /* ---------- GRID ---------- */
  if (view === "grid") {
    return (
      <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
            compact={compact}
            view="grid"
          />
        ))}
      </div>
    );
  }

  /* ---------- TIMELINE ---------- */
  return (
    <div className="relative mt-6">
      <div
        className="absolute top-0 bottom-0 w-px bg-linear-to-b from-transparent via-slate-400/50 to-transparent"
        style={{ left: "1.5rem" }}
      />

      <div className="space-y-3">
        {groups.map((group) => (
          <div key={group.key}>
            <GroupHeader
              label={group.label}
              count={group.items.length}
            />

            {group.items.map((repo) => (
              <RepoItem
                key={repo.id}
                repo={repo}
                compact={compact}
                view="timeline"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
