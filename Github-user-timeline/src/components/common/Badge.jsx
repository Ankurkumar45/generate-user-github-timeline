import React from 'react';

function Badge({ children }) {
    return (
        <>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300">
                {children}
            </span>
        </>
    );
}

export default Badge;
