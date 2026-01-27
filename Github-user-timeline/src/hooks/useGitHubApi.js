import { useState } from "react";


export function useGitHubApi() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchAllRepos = async (user) => {
        let page = 1;
        let all = [];
        while (page <= 30) {
            const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&page=${page}`);
            const data = await res.json();
            if (!Array.isArray(data) || data.length === 0) break;
            all.push(...data);
            if (data.length < 100) break;
            page++;
        }
        return all;
    };


    const loadUser = async () => {
        if (!username) return;
        setLoading(true);
        setError(null);
        try {
            const [uRes, rData] = await Promise.all([
                fetch(`https://api.github.com/users/${username}`),
                fetchAllRepos(username),
            ]);
            if (!uRes.ok) throw new Error("User not found");
            const uData = await uRes.json();
            setUser(uData);
            setRepos(rData);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };


    return { username, setUsername, user, repos, loading, error, loadUser };
}