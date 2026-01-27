import { useMemo } from "react";

export function useRepoFilters(repos, options) {
    return useMemo(() => {
        if (!repos.length) return [];

        let result = repos.map((repo) => ({
            ...repo,
            _derived: deriveDates(repo, options.dateField),
        }));

        /* ---------- FILTERS ---------- */
        result = result.filter((repo) => {
            if (!options.archived && repo.archived) return false;
            if (options.forks === "exclude" && repo.fork) return false;
            if (options.forks === "only" && !repo.fork) return false;
            return true;
        });

        /* ---------- SEARCH ---------- */
        if (options.search) {
            const q = options.search.toLowerCase();
            result = result.filter((repo) =>
                `${repo.name} ${repo.description || ""} ${repo.language || ""}`
                    .toLowerCase()
                    .includes(q)
            );
        }

        /* ---------- SORT ---------- */
        const dir = options.order === "asc" ? 1 : -1;

        result.sort((a, b) => {
            if (options.sortBy === "name") {
                return dir * a.name.localeCompare(b.name);
            }

            if (options.sortBy === "stars") {
                return dir * ((a.stargazers_count || 0) - (b.stargazers_count || 0));
            }

            if (options.sortBy === "size") {
                return dir * ((a.size || 0) - (b.size || 0));
            }

            const ad = new Date(a._derived.primaryDate || 0).getTime();
            const bd = new Date(b._derived.primaryDate || 0).getTime();
            return dir * (ad - bd);
        });

        return result;
    }, [repos, options]);
}

/* ---------- Helpers ---------- */

function deriveDates(repo, field) {
    const date = repo[field] || repo.created_at;
    const d = date ? new Date(date) : null;

    return {
        primaryDate: date,
        year: d?.getFullYear(),
        monthKey: d
            ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
            : null,
    };
}
