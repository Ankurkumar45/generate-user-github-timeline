import { useState } from "react";
import { fetchRepos } from "../services/githubApi";

export function useGithubRepos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [rateLimit, setRateLimit] = useState(null);

    const loadRepos = async (username, useCache = true) => {
        setLoading(true);

        try {
            const { data, rate } = await fetchRepos(username, useCache);
            setRepos(data);
            setRateLimit(rate);
        } catch (err) {
            setRepos([]);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        repos,
        loading,
        rateLimit,
        loadRepos,
    };
}
