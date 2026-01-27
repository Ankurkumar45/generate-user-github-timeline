export const formatDate = (iso) =>
new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(iso));


export const formatNumber = (n) => new Intl.NumberFormat().format(n ?? 0);