const BASE_URL = "https://api.github.com";
const CACHE_PREFIX = "github_timeline_";

/* ----------------------------------
   Helpers
----------------------------------- */

function getCache(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function setCache(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        /* ignore quota errors */
    }
}

function parseRateLimit(headers) {
    return {
        limit: headers.get("x-ratelimit-limit"),
        remaining: headers.get("x-ratelimit-remaining"),
        reset: headers.get("x-ratelimit-reset"),
    };
}

async function request(url) {
    const res = await fetch(url);

    if (!res.ok) {
        let message = "GitHub API error";
        try {
            const data = await res.json();
            message = data.message || message;
        } catch { }
        throw new Error(message);
    }

    return {
        data: await res.json(),
        rate: parseRateLimit(res.headers),
    };
}

/* ----------------------------------
   Public API
----------------------------------- */

/**
 * Fetch GitHub user profile
 */
export async function fetchUser(username) {
    if (!username) throw new Error("Username is required");

    const cacheKey = `${CACHE_PREFIX}user_${username}`;
    const cached = getCache(cacheKey);
    if (cached) return cached;

    const { data } = await request(`${BASE_URL}/users/${username}`);
    setCache(cacheKey, data);

    return data;
}

/**
 * Fetch all repositories (handles pagination)
 */
export async function fetchRepos(username, useCache = true) {
    if (!username) throw new Error("Username is required");

    const cacheKey = `${CACHE_PREFIX}repos_${username}`;
    if (useCache) {
        const cached = getCache(cacheKey);
        if (cached) return cached;
    }

    let page = 1;
    let allRepos = [];
    let rate = null;

    while (true) {
        const { data, rate: r } = await request(
            `${BASE_URL}/users/${username}/repos?per_page=100&page=${page}`
        );

        rate = r;
        allRepos = allRepos.concat(data);

        if (data.length < 100) break;
        page++;
    }

    const payload = { data: allRepos, rate };

    if (useCache) setCache(cacheKey, payload);

    return payload;
}
