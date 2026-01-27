import React from 'react';
import { formatNumber, formatDate } from "../../utils/formatters";
import Badge from '../common/Badge';

function GridView() {


    return (
        <>
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
        </>
    );

}

export default GridView;
