import React from 'react';

function StatBox({ label, value }) {
    return (
        <>
            <div className="rounded-xl border border-white/10 bg-slate-950/30 p-3">
                <div className="text-slate-400">{label}</div>
                <div className="mt-1 text-lg font-semibold text-slate-100">
                    {value}
                </div>
            </div>
        </>
    );
}

export default StatBox;
