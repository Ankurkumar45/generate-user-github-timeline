import React from 'react';

function Select({ label, name, value, onChange, options }) {
    return (
        <>
            <div>
                <label className="block text-xs font-medium text-slate-300">
                    {label}
                </label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm outline-none focus:border-indigo-400/60"
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default Select;
