import React from 'react';

function Toggle({ label, name, checked, onChange }) {
    return (
        <>
            <div className="flex items-end">
                <label className="inline-flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2">
                    <span className="text-sm text-slate-200">{label}</span>
                    <input
                        type="checkbox"
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        className="h-4 w-4 accent-indigo-400"
                    />
                </label>
            </div>
        </>
    );
}

export default Toggle;
