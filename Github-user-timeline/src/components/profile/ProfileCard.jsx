import React from 'react';
import { formatDate, formatNumber } from "../../utils/formatters";
import StatBox from '../common/StatBox';

function ProfileCard({ user, repos, lastFetchAt }) {
    if (!user) return null;

    const totalStars = repos.reduce(
        (sum, r) => sum + (r.stargazers_count || 0),
        0
    );

    const totalForks = repos.reduce(
        (sum, r) => sum + (r.forks_count || 0),
        0
    );
    return (
        <>
            {/* <section className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-xl p-4">
                <img src={user.avatar_url} className="h-16 w-16 rounded-xl" />
                <div>
                    <h2 className="text-lg font-semibold">{user.login}</h2>
                    <p className="text-sm text-slate-400">Public repos: {formatNumber(user.public_repos)}</p>
                    <p className="text-sm text-slate-400">Loaded: {repos.length}</p>
                </div>
            </section> */}

            <section className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Left: Avatar + Info */}
                    <div className="flex items-center gap-4">
                        <img
                            src={user.avatar_url}
                            alt={`${user.login} avatar`}
                            className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5"
                        />

                        <div>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-lg font-semibold hover:underline"
                                >
                                    {user.name || user.login}
                                </a>

                                <span className="text-sm text-slate-400">
                                    @{user.login}
                                </span>

                                {user.type && (
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                                        {user.type}
                                    </span>
                                )}
                            </div>

                            {user.bio && (
                                <p className="mt-1 text-sm text-slate-300">
                                    {user.bio}
                                </p>
                            )}

                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                {user.location && (
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                                        {user.location}
                                    </span>
                                )}

                                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                                    Followers: {formatNumber(user.followers)}
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                                    Following: {formatNumber(user.following)}
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                                    Public repos: {formatNumber(user.public_repos)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="grid grid-cols-2 gap-2 text-xs md:grid-cols-2">
                        <StatBox label="Repos shown" value={formatNumber(repos.length)} />
                        <StatBox label="Total stars" value={formatNumber(totalStars)} />
                        <StatBox label="Total forks" value={formatNumber(totalForks)} />
                        <StatBox
                            label="Fetched"
                            value={
                                lastFetchAt
                                    ? formatDate(lastFetchAt, true)
                                    : "—"
                            }
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileCard;
