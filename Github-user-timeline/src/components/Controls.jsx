import React from 'react';

function Controls({ username, setUsername, loadUser, loading, error }) {
    return (
        <>
            <section className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 glass">
                <div className="flex flex-col gap-3 md:flex-row md:items-end">
                    <input
                        className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-white/10"
                        placeholder="GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        onClick={loadUser}
                        className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50"
                    >
                        Generate
                    </button>
                </div>
                {error && <p className="text-rose-400 mt-2">{error}</p>}
            </section>
        </>
    );
}

export default Controls;
