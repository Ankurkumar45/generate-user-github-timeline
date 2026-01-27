const fmtDate = (iso, withTime = false) => {
    if (!iso) return '—';
    const d = new Date(iso);
    const opts = withTime
        ? { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }
        : { year: 'numeric', month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat(undefined, opts).format(d);
};

const fmtNum = (n) => new Intl.NumberFormat(undefined).format(n ?? 0);

const escapeHtml = (str) => {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
};

const monthLabel = (key) => {
    if (key === 'Unknown') return 'Unknown';
    const [y, m] = key.split('-').map(Number);
    const d = new Date(y, (m - 1), 1);
    return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long' }).format(d);
};